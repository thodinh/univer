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

import array from './function-list/array/zh-CN';
import compatibility from './function-list/compatibility/zh-CN';
import cube from './function-list/cube/zh-CN';
import database from './function-list/database/zh-CN';
import date from './function-list/date/zh-CN';
import engineering from './function-list/engineering/zh-CN';
import financial from './function-list/financial/zh-CN';
import information from './function-list/information/zh-CN';
import logical from './function-list/logical/zh-CN';
import lookup from './function-list/lookup/zh-CN';
import math from './function-list/math/zh-CN';
import statistical from './function-list/statistical/zh-CN';
import text from './function-list/text/zh-CN';
import univer from './function-list/univer/zh-CN';
import web from './function-list/web/zh-CN';

export default {
    formula: {
        insert: {
            tooltip: 'Functions',
            sum: 'Sum',
            average: 'Average',
            count: 'Count',
            max: 'Maximum',
            min: 'Minimum',
            more: 'More Functions...',
        },
        functionList: {
            ...financial,
            ...date,
            ...math,
            ...statistical,
            ...lookup,
            ...database,
            ...text,
            ...logical,
            ...information,
            ...engineering,
            ...cube,
            ...compatibility,
            ...web,
            ...array,
            ...univer,
        },

        prompt: {
            helpExample: 'Example',
            helpAbstract: 'Introduction',
            required: 'Required.',
            optional: 'Optional.',
        },

        functionType: {
            financial: 'Financial',
            date: 'Date and Time',
            math: 'Math and Trigonometry',
            statistical: 'Statistical',
            lookup: 'Lookup and Reference',
            database: 'Database',
            text: 'Text',
            logical: 'Logical',
            information: 'Information',
            engineering: 'Engineering',
            cube: 'Multidimensional Data Set',
            compatibility: 'Compatibility',
            web: 'Web',
            array: 'Array',
            univer: 'Univer',
            user: 'User-defined',
        },

        moreFunctions: {
            confirm: 'Apply',
            prev: 'Previous',
            next: 'Next',
            searchFunctionPlaceholder: 'Search function',
            allFunctions: 'All Functions',
            syntax: 'Syntax',
        },

        operation: {
            pasteFormula: 'Paste Formula Only',
        },
    },
};
