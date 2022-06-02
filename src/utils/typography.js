import Typography from 'typography'

const typography = new Typography({
    baseFontSize: '18px',
    baseLineHeight: 1.66,
    headerFontFamily: [
        'Roboto',
        'Segoe UI',
        'Lato',
        'Helvetica Neue',
        'Arial'
    ],
    bodyFontFamily: [
        'Roboto',
        'Oxygen',
        'Open Sans',
        'Georgia'
    ],
    googleFonts: [
        {
            name: 'Roboto',
            styles: [
                '700',
                '500'
            ]
        }
    ]
})

export default typography