/**
 * Copyright 2023-present DreamNum Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ErrorType } from '../../../basics/error-type';
import { type BaseValueObject, ErrorValueObject } from '../../../engine/value-object/base-value-object';
import { NumberValueObject } from '../../../engine/value-object/primitive-object';
import { BaseFunction } from '../../base-function';
import type { ArrayValueObject } from '../../../engine/value-object/array-value-object';
import { expandArrayValueObject } from '../../../engine/utils/array-object';
import { checkVariantsErrorIsStringToNumber } from '../../../engine/utils/check-variant-error';

export class Ddb extends BaseFunction {
    override minParams = 4;

    override maxParams = 5;

    override calculate(cost: BaseValueObject, salvage: BaseValueObject, life: BaseValueObject, period: BaseValueObject, factor?: BaseValueObject) {
        let _factor = factor ?? NumberValueObject.create(2);

        if (_factor.isNull()) {
            _factor = NumberValueObject.create(2);
        }

        const maxRowLength = Math.max(
            cost.isArray() ? (cost as ArrayValueObject).getRowCount() : 1,
            salvage.isArray() ? (salvage as ArrayValueObject).getRowCount() : 1,
            life.isArray() ? (life as ArrayValueObject).getRowCount() : 1,
            period.isArray() ? (period as ArrayValueObject).getRowCount() : 1,
            _factor.isArray() ? (_factor as ArrayValueObject).getRowCount() : 1
        );

        const maxColumnLength = Math.max(
            cost.isArray() ? (cost as ArrayValueObject).getColumnCount() : 1,
            salvage.isArray() ? (salvage as ArrayValueObject).getColumnCount() : 1,
            life.isArray() ? (life as ArrayValueObject).getColumnCount() : 1,
            period.isArray() ? (period as ArrayValueObject).getColumnCount() : 1,
            _factor.isArray() ? (_factor as ArrayValueObject).getColumnCount() : 1
        );

        const costArray = expandArrayValueObject(maxRowLength, maxColumnLength, cost, ErrorValueObject.create(ErrorType.NA));
        const salvageArray = expandArrayValueObject(maxRowLength, maxColumnLength, salvage, ErrorValueObject.create(ErrorType.NA));
        const lifeArray = expandArrayValueObject(maxRowLength, maxColumnLength, life, ErrorValueObject.create(ErrorType.NA));
        const periodArray = expandArrayValueObject(maxRowLength, maxColumnLength, period, ErrorValueObject.create(ErrorType.NA));
        const factorArray = expandArrayValueObject(maxRowLength, maxColumnLength, _factor, ErrorValueObject.create(ErrorType.NA));

        const resultArray = costArray.map((costObject, rowIndex, columnIndex) => {
            const salvageObject = salvageArray.get(rowIndex, columnIndex) as BaseValueObject;
            const lifeObject = lifeArray.get(rowIndex, columnIndex) as BaseValueObject;
            const periodObject = periodArray.get(rowIndex, columnIndex) as BaseValueObject;
            const factorObject = factorArray.get(rowIndex, columnIndex) as BaseValueObject;

            const { isError, errorObject, variants } = checkVariantsErrorIsStringToNumber(costObject, salvageObject, lifeObject, periodObject, factorObject);

            if (isError) {
                return errorObject as ErrorValueObject;
            }

            const [_costObject, _salvageObject, _lifeObject, _periodObject, _factorObject] = variants as BaseValueObject[];

            const costValue = +_costObject.getValue();
            const salvageValue = +_salvageObject.getValue();
            const lifeValue = +_lifeObject.getValue();
            const periodValue = Math.ceil(+_periodObject.getValue());
            const factorValue = +_factorObject.getValue();

            if (
                costValue < 0 ||
                salvageValue < 0 ||
                lifeValue <= 0 ||
                periodValue <= 0 ||
                Math.floor(periodValue) > Math.floor(lifeValue) ||
                factorValue <= 0
            ) {
                return ErrorValueObject.create(ErrorType.NUM);
            }

            return this._getResult(costValue, salvageValue, lifeValue, periodValue, factorValue, rowIndex, columnIndex);
        });

        if (maxRowLength === 1 && maxColumnLength === 1) {
            return (resultArray as ArrayValueObject).get(0, 0) as BaseValueObject;
        }

        return resultArray;
    }

    private _getResult(
        costValue: number,
        salvageValue: number,
        lifeValue: number,
        periodValue: number,
        factorValue: number,
        rowIndex: number,
        columnIndex: number
    ): BaseValueObject {
        let total = 0;
        let result = 0;

        if (salvageValue < costValue) {
            for (let i = 1; i <= periodValue; i++) {
                result = Math.min((costValue - total) * (factorValue / lifeValue), costValue - salvageValue - total);
                total += result;
            }
        }

        if (Number.isNaN(result) || !Number.isFinite(result)) {
            return ErrorValueObject.create(ErrorType.NUM);
        }

        if (rowIndex === 0 && columnIndex === 0) {
            return NumberValueObject.create(result, '"¥"#,##0.00_);[Red]("¥"#,##0.00)');
        } else {
            return NumberValueObject.create(result);
        }
    }
}