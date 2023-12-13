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

import type { IMutation } from '@univerjs/core';
import { CommandType, IUniverInstanceService, ObjectArray, Rectangle } from '@univerjs/core';
import type { IAccessor } from '@wendellhu/redi';

import type {
    IInsertColMutationParams,
    IInsertRowMutationParams,
    IRemoveColMutationParams,
    IRemoveRowsMutationParams,
} from '../../basics/interfaces/mutation-interface';

export const InsertRowMutationUndoFactory = (
    accessor: IAccessor,
    params: IInsertRowMutationParams
): IRemoveRowsMutationParams => {
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const universheet = univerInstanceService.getUniverSheetInstance(params.unitId);

    if (universheet == null) {
        throw new Error('universheet is null error!');
    }

    return {
        unitId: params.unitId,
        subUnitId: params.subUnitId,
        ranges: params.ranges.map((r) => Rectangle.clone(r)),
    };
};

export const InsertRowMutation: IMutation<IInsertRowMutationParams> = {
    id: 'sheet.mutation.insert-row',
    type: CommandType.MUTATION,
    handler: (accessor, params) => {
        const { unitId, subUnitId, ranges, rowInfo } = params;
        const univerInstanceService = accessor.get(IUniverInstanceService);

        const universheet = univerInstanceService.getUniverSheetInstance(unitId);
        if (universheet == null) {
            throw new Error('universheet is null error!');
        }

        const worksheet = universheet.getSheetBySheetId(subUnitId);
        if (worksheet == null) {
            throw new Error('worksheet is null error!');
        }

        // TODO@wzhudev: should not expose row data and let outside modules to modify it directly
        // the correct way to do this is to provide a method from RowManager to modify row data
        const rowWrapper = worksheet.getRowManager().getRowData();
        const defaultRowInfo = {
            h: worksheet.getConfig().defaultRowHeight,
            hd: 0,
        };

        for (let i = 0; i < ranges.length; i++) {
            const range = ranges[i];
            const rowIndex = range.startRow;
            const rowCount = range.endRow - range.startRow + 1;

            for (let j = rowIndex; j < rowIndex + rowCount; j++) {
                if (rowInfo) {
                    rowWrapper.insert(j, rowInfo.get(j - range.startRow) ?? defaultRowInfo);
                } else {
                    rowWrapper.insert(j, defaultRowInfo);
                }
            }
        }

        worksheet.setRowCount(
            worksheet.getRowCount() + ranges.reduce((acc, cur) => acc + cur.endRow - cur.startRow + 1, 0)
        );

        return true;
    },
};

export const InsertColMutationUndoFactory = (
    accessor: IAccessor,
    params: IInsertColMutationParams
): IRemoveColMutationParams => {
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const universheet = univerInstanceService.getUniverSheetInstance(params.unitId);

    if (universheet == null) {
        throw new Error('universheet is null error!');
    }

    return {
        unitId: params.unitId,
        subUnitId: params.subUnitId,
        ranges: params.ranges.map((r) => Rectangle.clone(r)),
    };
};

export const InsertColMutation: IMutation<IInsertColMutationParams> = {
    id: 'sheet.mutation.insert-col',
    type: CommandType.MUTATION,
    handler: (accessor, params) => {
        const univerInstanceService = accessor.get(IUniverInstanceService);
        const universheet = univerInstanceService.getUniverSheetInstance(params.unitId);

        if (universheet == null) {
            throw new Error('universheet is null error!');
        }

        const worksheet = universheet.getSheetBySheetId(params.subUnitId);
        if (!worksheet) return false;
        const manager = worksheet.getColumnManager();
        const { ranges, colInfo } = params;
        const columnPrimitive = manager.getColumnData().toJSON();
        const columnWrapper = new ObjectArray(columnPrimitive);

        for (let i = 0; i < ranges.length; i++) {
            const range = ranges[i];
            const colIndex = range.startColumn;
            const colCount = range.endColumn - range.startColumn + 1;
            const defaultColWidth = worksheet.getConfig().defaultColumnWidth;

            for (let j = colIndex; j < colIndex + colCount; j++) {
                const defaultColInfo = {
                    w: defaultColWidth,
                    hd: 0,
                };
                if (colInfo) {
                    columnWrapper.insert(j, colInfo.get(j - range.startColumn) ?? defaultColInfo);
                } else {
                    columnWrapper.insert(j, defaultColInfo);
                }
            }
        }

        worksheet.setColumnCount(
            worksheet.getColumnCount() + ranges.reduce((acc, cur) => acc + cur.endColumn - cur.startColumn + 1, 0)
        );

        return true;
    },
};
