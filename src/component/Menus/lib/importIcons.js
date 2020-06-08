// lib/importIcons.js
let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
    importAll(require.context('../../../assets/svg', true, /\.svg$/))
} catch (error) {
    console.log(error)
}
