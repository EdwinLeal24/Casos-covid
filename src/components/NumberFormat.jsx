export default function NumberFormat ({children}) {
    const locale = 'es'
    return new Intl.NumberFormat(locale).format(children)
}