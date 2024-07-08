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

import type zhCN from './zh-CN';

const locale: typeof zhCN = {
    spreadsheetLabel: '插件',
    spreadsheetRightLabel: '更多 Sheets',

    // toolbar.undo
    toolbar: {
        undo: '撤銷',
        redo: '重做',
        formatPainter: '格式刷',
        currencyFormat: '貨幣格式',
        percentageFormat: '百分比格式',
        numberDecrease: '減少小數位數',
        numberIncrease: '增加小數位數',
        moreFormats: '更多格式',
        font: '字體',
        fontSize: '字號',
        bold: '粗體',
        italic: '斜體',
        strikethrough: '刪除線',
        subscript: '下標',
        superscript: '上標',
        underline: '底線',
        textColor: {
            main: '文字顏色',
            right: '顏色選擇',
        },
        resetColor: '重置顏色',
        customColor: '自訂',
        alternatingColors: '交替顏色',
        confirmColor: '確定顏色',
        cancelColor: '取消',
        collapse: '收起',
        fillColor: {
            main: '單元格顏色',
            right: '顏色選擇',
        },
        border: {
            main: '邊框',
            right: '邊框類型',
        },
        mergeCell: {
            main: '合併儲存格',
            right: '選擇合併類型',
        },
        horizontalAlignMode: {
            main: '水平對齊',
            right: '對齊方式',
        },
        verticalAlignMode: {
            main: '垂直對齊',
            right: '對齊方式',
        },
        textWrapMode: {
            main: '文字換行',
            right: '換行方式',
        },
        textRotateMode: {
            main: '文字旋轉',
            right: '旋轉方式',
        },
        freezeTopRow: '凍結首行',
        sortAndFilter: '排序與篩選',
        findAndReplace: '尋找替換',
        sum: '求和',
        autoSum: '自動求和',
        moreFunction: '更多函數',
        conditionalFormatting: '條件格式',
        comment: '批註',
        pivotTable: '資料透視表',
        chart: '圖表',
        screenshot: '截圖',
        splitColumn: '分列',
        insertImage: '插入圖片',
        insertLink: '插入連結',
        dataValidation: '資料驗證',
        protection: '保護工作表內容',

        clearText: '清除顏色選擇',
        noColorSelectedText: '沒有顏色被選',

        toolMore: '更多',
        toolLess: '少於',
        toolClose: '收起',
        toolMoreTip: '更多功能',
        moreOptions: '更多選項',

        cellFormat: '設定儲存格格式',
        print: '列印',
        borderMethod: {
            top: '上框線',
            bottom: '下框線',
            left: '左框線',
            right: '右框線',
        },
        more: '更多',
    },
    defaultFmt: {
        Automatic: {
            text: '自動',
            value: 'General',
            example: '',
        },
        Number: {
            text: '數字',
            value: '##0.00',
            example: '1000.12',
        },
        Percent: {
            text: '百分比',
            value: '#0.00%',
            example: '12.21%',
        },
        PlainText: {
            text: '純文字',
            value: '@',
            example: '',
        },
        Scientific: {
            text: '科學計數',
            value: '0.00E+00',
            example: '1.01E+5',
        },
        Accounting: {
            text: '會計',
            value: '¥(0.00)',
            example: '¥(1200.09)',
        },
        Thousand: {
            text: '萬元',
            value: 'w',
            example: '1億2000萬2500',
        },
        Currency: {
            text: '貨幣',
            value: '¥0.00',
            example: '¥1200.09',
        },
        Digit: {
            text: '萬元2位小數',
            value: 'w0.00',
            example: '2萬2500.55',
        },
        Date: {
            text: '日期',
            value: 'yyyy-MM-dd',
            example: '2017-11-29',
        },
        Time: { text: '時間', value: 'hh:mm AM/PM', example: '3:00 PM' },
        Time24H: { text: '時間24H', value: 'hh:mm', example: '15:00' },
        DateTime: { text: '日期時間', value: 'yyyy-MM-dd hh:mm AM/PM', example: '2017-11-29 3:00 PM' },
        DateTime24H: { text: '日期時間24H', value: 'yyyy-MM-dd hh:mm', example: '2017-11-29 15:00' },
        CustomFormats: { text: '自訂格式', value: 'fmtOtherSelf', example: '' },
    },
    format: {
        moreCurrency: '更多貨幣格式',
        moreDateTime: '更多日期與時間格式',
        moreNumber: '更多數字格式',

        titleCurrency: '貨幣格式',
        decimalPlaces: '小數位數',
        titleDateTime: '日期與時間格式',
        titleNumber: '數字格式',
    },
    print: {
        normalBtn: '常規視圖',
        layoutBtn: '頁面佈局',
        pageBtn: '分頁預覽',

        menuItemPrint: '打印(Ctrl+P)',
        menuItemAreas: '列印區域',
        menuItemRows: '列印標題行',
        menuItemColumns: '列印標題列',
    },
    align: {
        left: '左對齊',
        center: '中間對齊',
        right: '右對齊',

        top: '頂部對齊',
        middle: '居中對齊',
        bottom: '底部對齊',
    },

    button: {
        confirm: '確定',
        cancel: '取消',
        close: '關閉',
        update: 'Update',
        delete: 'Delete',
        insert: '新建',
        prevPage: '上一頁',
        nextPage: '下一頁',
        total: '總共：',
    },
    punctuation: {
        tab: 'Tab 鍵',
        semicolon: '分號',
        comma: '逗號',
        space: '空格',
    },
    colorPicker: {
        collapse: '收起',
        customColor: '自訂',
        change: '切換',
        confirmColor: '確定',
        cancelColor: '取消',
    },
    borderLine: {
        borderTop: '上框線',
        borderBottom: '下框線',
        borderLeft: '左框線',
        borderRight: '右框線',
        borderNone: '無',
        borderAll: '所有',
        borderOutside: '外側',
        borderInside: '內側',
        borderHorizontal: '內側橫線',
        borderVertical: '內側垂直線',
        borderColor: '邊框顏色',
        borderSize: '邊框粗細',
        borderType: '邊框線類型',
    },
    merge: {
        all: '全部合併',
        vertical: '垂直合併',
        horizontal: '水平合併',
        cancel: '取消合併',
        overlappingError: '不能合併重疊區域',
        partiallyError: '無法對部分合併儲存格執行此操作',
        confirm: {
            title: '合併儲存格僅儲存左上角儲存格的值，是否繼續？ ',
            cancel: '取消合併',
            confirm: '繼續合併',
            waring: '警告',
            dismantleMergeCellWaring: '此操作會導致一些合併單元格被拆散，是否繼續?',
        },
    },
    filter: {
        confirm: {
            error: '出現了一個問題',
            notAllowedToInsertRange: '要移動這些單元格，請清除該區域的篩選器',
        },
    },
    textWrap: {
        overflow: '溢出',
        wrap: '自動換行',
        clip: '截斷',
    },
    textRotate: {
        none: '無旋轉',
        angleUp: '向上傾斜',
        angleDown: '向下傾斜',
        vertical: '直排文字',
        rotationUp: '向上90°',
        rotationDown: '向下90°',
    },
    sheetConfig: {
        delete: '刪除',
        copy: '複製',
        rename: '重命名',
        changeColor: '更改顏色',
        hide: '隱藏',
        unhide: '取消隱藏',
        moveLeft: '向左移',
        moveRight: '向右移',
        resetColor: '重置顏色',
        cancelText: '取消',
        chooseText: '確定顏色',

        tipNameRepeat: '標籤頁的名稱不能重複！請重新修改',
        noMoreSheet:
            '工作薄內至少含有一張可視工作表。若需刪除選定的工作表，請先插入一張新工作表或顯示隱藏的工作表。 ',
        confirmDelete: '是否刪除',
        redoDelete: '可以透過Ctrl+Z撤銷刪除',
        noHide: '不能隱藏, 至少保留一個sheet標籤',
        chartEditNoOpt: '圖表編輯模式下不允許該操作！ ',
        sheetNameErrorTitle: '錯誤',
        sheetNameSpecCharError: "名稱不能超過 31 個字符，首尾不能是' 且名稱不能包含: [ ] : \\ ? * /",
        sheetNameCannotIsEmptyError: '名稱不能為空。 ',
        sheetNameAlreadyExistsError: '工作表已存在，請輸入其它名稱。 ',
        deleteSheet: '刪除工作表',
        deleteSheetContent: '確認刪除此工作表，刪除後將不可找回，確定要刪除嗎？ ',
        addProtectSheet: '保護工作表',
        removeProtectSheet: '取消保護工作表',
        changeSheetPermission: '更改工作表權限',
        viewAllProtectArea: '查看所有保護範圍',
    },
    rightClick: {
        copy: '複製',
        copyAs: '複製為',
        cut: '剪切',
        paste: '貼上',
        pasteSpecial: '選擇性貼上',
        pasteValue: '僅貼上值',
        pasteFormat: '僅貼上格式',
        pasteColWidth: '僅貼上列寬',
        pasteBesidesBorder: '僅貼上邊框以外內容',
        insert: '插入',
        delete: '刪除',
        insertRow: '插入行',
        insertRowBefore: '上方插入行',
        insertColumn: '插入列',
        insertColumnBefore: '在左側插入列',
        deleteCell: '刪除儲存格',
        insertCell: '插入儲存格',
        deleteSelected: '刪除選取',
        hide: '隱藏',
        hideSelected: '隱藏選中',
        showHide: '顯示隱藏',
        toTopAdd: '向上增加',
        toBottomAdd: '向下增加',
        toLeftAdd: '向左增加',
        toRightAdd: '向右增加',
        deleteSelectedRow: '刪除選取行',
        deleteSelectedColumn: '刪除選取列',
        hideSelectedRow: '隱藏選中行',
        showHideRow: '顯示隱藏行',
        rowHeight: '行高',
        hideSelectedColumn: '隱藏選取列',
        showHideColumn: '顯示隱藏列',
        columnWidth: '列寬',
        to: '向',
        left: '左',
        right: '右',
        top: '上',
        bottom: '下',
        moveLeft: '左移',
        moveUp: '上移',
        moveRight: '右移',
        moveDown: '下移',
        add: '增加',
        row: '行',
        column: '列',
        width: '寬',
        height: '高',
        number: '數字',
        confirm: '確認',
        orderAZ: 'A-Z順序排列',
        orderZA: 'Z-A降序排列',
        clearSelection: '清除',
        clearContent: '清除內容',
        clearFormat: '清除格式',
        clearAll: '清除全部',
        matrix: '矩陣運算選區',
        sortSelection: '排序選區',
        filterSelection: '篩選選區',
        chartGeneration: '圖表生成',
        firstLineTitle: '首行為標題',
        untitled: '無標題',
        array1: '一維數組',
        array2: '二維數組',
        array3: '多維數組',
        diagonal: '對角線',
        antiDiagonal: '反對角線',
        diagonalOffset: '對角線偏移',
        offset: '偏移量',
        boolean: '布林值',
        flip: '翻轉',
        upAndDown: '上下',
        leftAndRight: '左右',
        clockwise: '順時針',
        counterclockwise: '逆時針',
        transpose: '轉置',
        matrixCalculation: '矩陣計算',
        plus: '加',
        minus: '減',
        multiply: '乘',
        divided: '除',
        power: '次方',
        root: '次方根',
        log: 'log',
        delete0: '刪除兩端0值',
        removeDuplicate: '刪除重複值',
        byRow: '按行',
        byCol: '按列',
        generateNewMatrix: '產生新矩陣',
        fitContent: '適合數據',
        freeze: '凍結',
        freezeCol: '凍結列',
        freezeRow: '凍結行',
        cancelFreeze: '取消凍結',
        zenEditor: '禪模式編輯',
        deleteAllRowsAlert: '您無法刪除工作表上的所有行',
        deleteAllColumnsAlert: '您無法刪除工作表上的所有欄位',
        hideAllRowsAlert: '您無法隱藏工作表上的所有行',
        hideAllColumnsAlert: '您無法隱藏工作表上的所有欄位',
        protectRange: '保護行列',
        editProtectRange: '設定保護範圍',
        removeProtectRange: '移除保護範圍',
        turnOnProtectRange: '新增保護範圍',
        viewAllProtectArea: '查看所有保護範圍',
    },
    info: {
        tooltip: '提示',
        error: '錯誤',
        notChangeMerge: '不能對合併儲存格做部分更改',
        detailUpdate: '新開啟',
        detailSave: '已恢復本機快取',
        row: '行',
        column: '列',
        loading: '渲染中···',

        copy: '副本',
        return: '返回',
        rename: '重命名',
        tips: '重命名',
        noName: '無標題的電子表格',
        wait: '待更新',

        add: '新增',
        addLast: '在底部加上',
        backTop: '回到頂部',
        // eslint-disable-next-line no-template-curly-in-string
        pageInfo: '共${total}條，${totalPage}頁，目前已顯示${currentPage}頁',
        nextPage: '下一頁',

        tipInputNumber: '請輸入數字',
        tipInputNumberLimit: '增加範圍限制在1-100',

        tipRowHeightLimit: '行高必須在0 ~ 545之間',
        tipColumnWidthLimit: '列寬必須在0 ~ 2038之間',
        // eslint-disable-next-line no-template-curly-in-string
        pageInfoFull: '共${total}條，${totalPage}頁，已顯示全部資料',
        problem: '出現了一個問題',
        forceStringInfo: '以文字形式儲存的數字',
    },
    clipboard: {
        paste: {
            exceedMaxCells: '貼上區域超出最大儲存格數',
            overlappingMergedCells: '貼上區域與合併儲存格重疊',
        },
        shortCutNotify: {
            title: '請使用快捷鍵貼上',
            useShortCutInstead: '偵測到 Excel 內容，請使用快速鍵貼上',
        },
    },
    statusbar: {
        sum: '求和',
        average: '平均值',
        min: '最小值',
        max: '最大值',
        count: '數值計數',
        countA: '計數',
        clickToCopy: '點選複製數值',
        copied: '已複製',
    },
    autoFill: {
        copy: '複製儲存格',
        series: '填充序列',
        formatOnly: '僅填滿格式',
        noFormat: '不含格式填滿',
    },
    rangeSelector: {
        placeholder: '選擇範圍或輸入值',
        tooltip: '選擇範圍',
    },
    shortcut: {
        sheet: {
            'zoom-in': '放大',
            'zoom-out': '縮小',
            'reset-zoom': '恢復縮放',
            'select-below-cell': '選擇下方儲存格',
            'select-up-cell': '選擇上方儲存格',
            'select-left-cell': '選擇左側儲存格',
            'select-right-cell': '選擇右側儲存格',
            'select-next-cell': '選取後一個儲存格',
            'select-previous-cell': '選擇前一個儲存格',
            'select-up-value-cell': '選擇上方有值的儲存格',
            'select-below-value-cell': '選取下方有值的儲存格',
            'select-left-value-cell': '選擇左側有值的儲存格',
            'select-right-value-cell': '選擇右側有值的儲存格',
            'expand-selection-down': '向下擴展選區',
            'expand-selection-up': '向上擴展選區',
            'expand-selection-left': '向左擴展選取範圍',
            'expand-selection-right': '向右擴展選區',
            'expand-selection-to-left-gap': '向左擴展選區到下一個邊界',
            'expand-selection-to-below-gap': '向下擴展選區到下一個邊界',
            'expand-selection-to-right-gap': '向右擴展選區到下一個邊界',
            'expand-selection-to-up-gap': '向上擴展選區到下一個邊界',
            'select-all': '全選',
            'toggle-editing': '開始 / 結束編輯',
            'delete-and-start-editing': '清空並開始編輯',
            'abort-editing': '放棄編輯',
            'break-line': '換行',
            'set-bold': '切換粗體',
            'set-italic': '切換斜體',
            'set-underline': '切換底線',
            'set-strike-through': '切換刪除線',
            'start-editing': '開始編輯（選取範圍切換到編輯器）',
        },
    },
    'sheet-view': '瀏覽表格',
    'sheet-edit': '編輯表格',
    definedName: {
        managerTitle: '名稱管理器',
        managerDescription: '透過選擇儲存格或公式，並在文字方塊中輸入您想要的名稱來建立定義名稱。 ',
        addButton: '新建名稱',
        featureTitle: '定義名稱',
        ratioRange: '範圍',
        ratioFormula: '公式',
        confirm: '確認',
        cancel: '取消',
        scopeWorkbook: '工作簿',
        inputNamePlaceholder: '請輸入名稱（必填）',
        inputCommentPlaceholder: '請輸入備註',
        inputRangePlaceholder: '請輸入範圍（必填）',
        inputFormulaPlaceholder: '請輸入公式（必填）',
        nameEmpty: '名稱不能為空',
        nameDuplicate: '名稱重複',
        formulaOrRefStringEmpty: '公式或引用字串不能為空',
        formulaOrRefStringInvalid: '公式或引用字串無效',
        defaultName: 'DefinedName',
        updateButton: '修改',
        deleteButton: '刪除',
        deleteConfirmText: '確定刪除定義名稱？ ',
        nameConflict: '與函數名稱衝突',
        nameInvalid: '名稱不包含空格或不允許的字元',
        nameSheetConflict: '名稱與工作表名稱衝突',
    },
    uploadLoading: {
        loading: '正在上傳，目前剩餘',
        error: '載入失敗',
    },
    permission: {
        toolbarMenu: '保護',
        panel: {
            title: '保護行列',
            name: '名稱',
            protectedRange: '保護區域',
            permissionDirection: '權限描述',
            permissionDirectionPlaceholder: '請輸入權限描述',
            editPermission: '編輯權限',
            onlyICanEdit: '僅我可以編輯',
            designedUserCanEdit: '指定使用者可以編輯',
            viewPermission: '檢視權限',
            othersCanView: '其他人可以查看',
            noOneElseCanView: '其他人不可以查看',
            designedPerson: '指定人員',
            addPerson: '新增人員',
            canEdit: '可編輯',
            canView: '可查看',
            delete: '刪除',
            currentSheet: '目前工作表',
            allSheet: '所有工作表',
            edit: '編輯',
            Print: '打印',
            Comment: '評論',
            Copy: '複製',
            SetCellStyle: '設定儲存格樣式',
            SetCellValue: '設定單元格值',
            SetHyperLink: '設定超連結',
            Sort: '排序',
            Filter: '篩選',
            PivotTable: '資料透視表',
            FloatImage: '浮動圖片',
            RowHeightColWidth: '行高列寬',
            RowHeightColWidthReadonly: '只讀行高列寬',
            FilterReadonly: '唯讀篩選',
            nameError: '名稱不能為空',
            created: '創建',
            iCanEdit: '我可以編輯',
            iCanNotEdit: '我不會編輯',
            iCanView: '我可以查看',
            iCanNotView: '我不可以查看',
            emptyRangeError: '範圍不能為空',
            rangeOverlapError: '範圍不能重疊',
            rangeOverlapOverPermissionError: '範圍不能重疊已有權限範圍',
            InsertHyperlink: '插入超連結',
            SetRowStyle: '設定行樣式',
            SetColumnStyle: '設定列樣式',
            InsertColumn: '插入列',
            InsertRow: '插入行',
            DeleteRow: '刪除行',
            DeleteColumn: '刪除列',
            EditExtraObject: '編輯其他物件',
        },
        dialog: {
            allowUserToEdit: '允許使用者編輯',
            allowedPermissionType: '允許權限類型',
            setCellValue: '設定單元格值',
            setCellStyle: '設定儲存格樣式',
            copy: '複製',
            alert: '提示',
            alertContent: '該範圍已被保護，目前無編輯權限。如需編輯，請聯絡創建者。 ',
            userEmpty: '沒有指定的人員，分享連結以邀請特定的人。 ',
            listEmpty: '你還沒有設定任何範圍或工作表為受保護狀態。 ',
            commonErr: '該範圍已被保護，目前無該操作權限。如需編輯，請聯絡創建者。 ',
            editErr: '該範圍已被保護，目前無編輯權限。如需編輯，請聯絡創建者。 ',
            pasteErr: '該範圍已被保護，目前無貼上權限。如需貼上，請聯絡創作者。 ',
            setStyleErr: '該範圍已被保護，目前無設定樣式權限。如需設定樣式，請聯絡建立者。 ',
            copyErr: '該範圍已被保護，目前無複製權限。如需複製，請聯絡創建者。 ',
            workbookCopyErr: '該工作簿已被保護，目前無複製權限。如需複製，請聯絡創建者。 ',
            setRowColStyleErr: '該範圍已被保護，目前無設定行列樣式權限。如需設定行列樣式，請聯絡建立者。 ',
            moveRowColErr: '該範圍已被保護，目前無移動行列權限。如需行動行列，請聯絡創作者。 ',
            moveRangeErr: '該範圍已被保護，目前無移動選取範圍權限。如需移動選區，請聯絡創作者。 ',
            autoFillErr: '範圍已被保護，目前無自動填入權限。如需自動填充，請聯絡建立者。 ',
            filterErr: '該範圍已被保護，目前無篩選權限。如需篩選，請聯絡創作者。 ',
            operatorSheetErr: '該工作表已被保護，目前無操作工作表權限。如需操作工作表，請聯絡創建者。 ',
            insertOrDeleteMoveRangeErr: '插入、刪除區域與保護範圍相交，暫不支援此操作。 ',
            printErr: '該工作表已被保護，目前無列印權限。如需列印，請聯絡創作者。 ',
            formulaErr: '該範圍或引用範圍已被保護，目前無編輯權限。如需編輯，請聯絡創建者。 ',
            hyperLinkErr: '範圍已被保護，目前無設定超連結權限。如需設定超鏈接，請聯絡建立者。 ',
        },
        button: {
            confirm: '確認',
            cancel: '取消',
            addNewPermission: '新增權限',
        },
    },
};
export default locale;
