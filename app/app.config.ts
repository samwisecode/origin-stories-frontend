export default defineAppConfig({
  ui: {
    colors: {
      primary: 'slate',
      neutral: 'slate'
    },
    button: {
      defaultVariants: {
        color: 'black',
        variant: 'solid',
        size: 'md'
      },
      default: {
        class: 'bg-black text-white'
      }
    }
    // pageHero: {
    //   title: 'hero-title',
    //   description: 'hero-description mt-6'
    // },
    // pageSection: {
    //   title: 'section-title',
    //   description: 'section-description mt-4'
    // }
  }
})
