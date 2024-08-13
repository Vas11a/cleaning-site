export const catalog_kyiv = {
    labels: [
        {value: 'Генеральне прибирання', label: 'general', type: 'single'},
        {value: 'Інше', label: 'other', type: 'multy', open: false ,children: [
            {value: 'Кухня', label: 'kitchen'},
            {value: 'Туалет', label: 'toilet'},
            {value: 'Спальня', label: 'bedroom'},
        ]},
        {value: 'Хімчистка', label: 'chem_cleaning', type: 'single'},
        {value: "Часткове прибирання", label: 'partial_cleaning', type: 'single'},        
    ]
}