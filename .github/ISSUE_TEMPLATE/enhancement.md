---
name: ENHANCEMENT
about: Describe this issue template's purpose here.
title: "[ENHANCEMENT}"
labels: ''
assignees: ''

---

description: Suggest an improvement or new feature for the project.
labels: enhancement
body:
  - type: markdown
    text: "### Describe the enhancement\nProvide a clear and concise description of the improvement or new feature."
  - type: textarea
    id: current_behavior
    attributes:
      label: "Current behavior"
      description: "What is the current behavior or limitation?"
      placeholder: "Describe the current state or limitation of the project."
  - type: textarea
    id: expected_behavior
    attributes:
      label: "Expected behavior"
      description: "What should the behavior look like after the enhancement?"
      placeholder: "Describe how the enhancement will improve the project."
  - type: textarea
    id: additional_context
    attributes:
      label: "Additional context or ideas"
      description: "Provide additional information or context, if any."
      placeholder: "Optional: Include relevant examples, mockups, or references."
  - type: input
    id: priority
    attributes:
      label: "Priority Level"
      description: "How important is this enhancement? (e.g., Low, Medium, High)"
      placeholder: "Enter priority level"
