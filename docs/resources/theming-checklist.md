# Theme scope checklist

## Percievable 

- [ ] Instructions for understanding and operating content do not rely solely on [1.3.3](https://www.w3.org/TR/WCAG22/#sensory-characteristics)
    - [ ] shape
    - [ ] color
    - [ ] size
    - [ ] visual location
    - [ ] orientation
    - [ ] sound
- [ ]  Color is not the only means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.[1.4.1]
- [ ] Text has a contrast ratio of at least 4.5:1 (Except for large text, incidental uses, and logos). [1.4.3](https://www.w3.org/TR/WCAG22/#contrast-minimum)
    - [ ] Contrast ratio is at least 7:1 (Except for large text, incidental uses, and logos). [1.4.6](https://www.w3.org/TR/WCAG22/#contrast-enhanced)
- [ ] Text is used to convey information, rather than images of text. See guidelines for exceptions. [1.4.5](https://www.w3.org/TR/WCAG22/#images-of-text) and [1.4.9](https://www.w3.org/TR/WCAG22/#images-of-text-no-exception)
- [ ] User interface components and graphics have a contrast ratio of at least 3:1 against adjacent color(s). [1.4.11](https://www.w3.org/TR/WCAG22/#non-text-contrast)
- [ ] When a measurement should scale with text size, it is measured in ems. When a measurement should not scale with text size, it is measured in px. [Source](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/)
- [ ] Syntax highlighting has a contrast ratio of at least 4.5:1
- [ ] Red and green are not used adjacent to one another or to convey opposite information unless they are labelled with non-color versions of the information at every instance. 


## Operable

- [ ] Animations tirggered by interaction can be disabled (see guidelines for exceptions). [2.3.3.](https://www.w3.org/TR/WCAG22/#animation-from-interactions)
- [ ] There is a visible focus indicator. [2.4.7](https://www.w3.org/TR/WCAG22/#focus-visible)
- [ ] Visible focus indicators have ([2.4.11](https://www.w3.org/TR/WCAG22/#focus-appearance-minimum) and [2.4.12](https://www.w3.org/TR/WCAG22/#focus-appearance-enhanced))
    - [ ] A contrast ratio of at least 3:1 between focused and unfocused states. 
        - [ ] A contrast ratio of 4.5:1 between focused and unfocused states.
    - [ ] An area of either 1px thick perimeter of the unfocused component, or 4px thick line on the shortest side of the unfocused component.
    - [ ] A contrast ratio of at least 3:1 between the focused component and adjacent colors, or a thickness of at least 2px.
    - [ ] The focus indicator is not hidden by author-created content.
- [ ] The target for clickable areas is at least 24 by 24px. See guidelines for exceptions. [2.5.8](https://www.w3.org/TR/WCAG22/#target-size-minimum) 
    - [ ] The target for clickable areas is at least 44 by 44px. See guidelines for exceptions. [2.5.5](https://www.w3.org/TR/WCAG22/#target-size-enhanced) 

## Understandable

- [ ] Areas with user input have labels or instructions. [3.3.2](https://www.w3.org/TR/WCAG22/#labels-or-instructions)
- [ ] Labels and instructions are persistent.
- [ ] All clickable areas have tool tips.

## Customization

I'm including this because I'd like to evaluate for it, but it may not be possible in this timeline.

- [ ] For blocks of text, users have an interface that can ([1.4.8](https://www.w3.org/TR/WCAG22/#visual-presentation))
    - [ ] Select foreground and background colors
    - [ ] Set text block width (to no more than 80 characters or glyphs (40 if CJK).)
    - [ ] Set text aligment (and turn off justification)
    - [ ] Select line height (for at least 1.5)
    - [ ] Select paragraph spacing (for at least 1.5)
    - [ ] Set text size (up to 200 percent original)
    - [ ] Select font (non-WCAG)
- [ ] Without loss of content or functionality, text can be set to ([1.4.12](https://www.w3.org/TR/WCAG22/#text-spacing))
    - [ ] Have a line height of at least 1.5 the font size
    - [ ] Have paragraph spacing at least 2 times the font size
    - [ ] Have letter spacing at least 0.12 times the font size
    - [ ] Have word spacing at least 0.16 times the font size
- [ ] Users can set predefined styles based on any of the interfaces customization features.
- [ ] Users can set cell background color 
- [ ] Users can select page background color
- [ ] Users can set syntax highlighting theme
- [ ] Users can toggle customized styles on and off (do not need to reset all to default one by one)