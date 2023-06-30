# Home Assignment: **Build a Mini Page Builder**

The goal of the assignment is to build a mini Page Builder using React and TypeScript. The Page Builder should allow the users (marketers) to construct a webpage by assembling predefined components called Slices ([Prismic concept of Slices](https://prismic.io/docs/slice)) in a visual interface.

<br>

## Table of content

This README outlines the specific features you'll need to implement for this assignment, as well as the evaluation criteria we'll be using to assess your work. This way, we hope you have a clear understanding of our expectations. Furthermore, we require you to include the two provided scripts in your final submission.

If any part of this test is unclear, please don't hesitate to reach out. We're here to provide clarifications and answer your queries to ensure you have the best possible understanding of the assignment.

Upon completion of the assignment, please compress your project into a ZIP file, include your first and last name in the filename, and send it back to us for evaluation.

> ⚠️ Please do not share your work or this template publicly. This ensures each candidate has an equal opportunity to showcase their skills during the evaluation process.

- [Instructions](#instructions)
- [Evaluation Criteria](#evaluation-criteria)
- [Available Scripts](#available-scripts)

<br>

## Instructions

> Create a page where it’s possible to add or remove slices with a dynamically generated form to edit the values of the slice fields.

On a single page, users should be able to add or remove slices and edit the field values.

A requirement of this assignment is to ensure **data persistence**. This means, when the page is refreshed, the form data should remain intact. It's important to note that only valid data must be persisted. For instance, while a user can input anything into the "Number" field, only valid numbers should be persisted. If the app detects there is invalid data, it should show an error message under the field that it's invalid.

ℹ️ _E.g.: If a user wants to write `-1`, the user will first start to type `-` in the "Number" field. In that case, the persisted data should never be `-` since it's not a valid number._

We want you to implement the following slices:

- "Hero" slice that contains two "Text" fields
- "Article" slice that contains two "Text" fields and a "Color" field
- "Price" slice that contains a "Text" field and a "Number" field

Each field can be interpreted as follows:

- "Text" field as any valid string value
- "Color" field as any hexadecimal color value
- "Number" field as any valid number value

It should be possible to add any number of slices into the page.

We provide you the design of the main components of the Page Builder: [Prismic Figma - Home Assignment](https://www.figma.com/file/orSE14LfgFg14JZ2GBcCTT/Home-Assignment?type=design&node-id=1%3A3&t=rmdxaN5g0WQhGdIf-1)

> - If you don't have a Figma account, you need to create a free one in order to inspect the design.
> - If you never used Figma, after selecting a component, you can click on the "Inspect tab" on the top right of the page to see the properties. ([Figma Doc - Use the Inspect panel](https://help.figma.com/hc/en-us/articles/360055203533-Use-the-Inspect-panel))
> - The add icon (add.svg) from the "Available slices" design is on the "src/assets" folder.
> - ⚠️ We require you to use handmade CSS (Sass, CSS-in-JS, ...) to implement each of the given Figma components and to **respect the design as close as possible**. Please do not use CSS frameworks like Tailwind or Bootstrap for styling this specific part. ⚠️

ℹ️ _E.g.: A user launches your project and sees a slice's selector:_

```
|-- Available slices --------------------------------------------|
|                    |                       |                   |
|       + Hero       |      + Article        |      + Price      |
|                    |                       |                   |
|----------------------------------------------------------------|
```

ℹ️ _E.g.: Then the user adds a "Hero" slice and modifies the title and subtitle:_

```
|-- Hero slice --------------------------------------------------|
|                                                 - Remove slice |
|   Text Input                                                   |
|                                                                |
|   Text Input                                                   |
|                                                                |
|----------------------------------------------------------------|
|-- Available slices --------------------------------------------|
|                    |                       |                   |
|       + Hero       |      + Article        |      + Price      |
|                    |                       |                   |
|----------------------------------------------------------------|
```

ℹ️ _E.g.: After that, the user adds a "Price" slice and modify the title, subtitle and the link text with a URL:_

```
|-- Hero slice --------------------------------------------------|
|                                                 - Remove slice |
|   Text Input                                                   |
|                                                                |
|   Text Input                                                   |
|                                                                |
|----------------------------------------------------------------|
|-- Price slice -------------------------------------------------|
|                                                 - Remove slice |
|   Text Input                                                   |
|                                                                |
|   Number Input                                                 |
|                                                                |
|----------------------------------------------------------------|
|-- Available slices --------------------------------------------|
|                    |                       |                   |
|       + Hero       |      + Article        |      + Price      |
|                    |                       |                   |
|----------------------------------------------------------------|
```

ℹ️ _E.g.: Finally, the user removes the "Hero" slice:_

```
|-- Price slice -------------------------------------------------|
|                                                 - Remove slice |
|   Text Input                                                   |
|                                                                |
|   Number Input                                                 |
|                                                                |
|----------------------------------------------------------------|
|-- Available slices --------------------------------------------|
|                    |                       |                   |
|       + Hero       |      + Article        |      + Price      |
|                    |                       |                   |
|----------------------------------------------------------------|
```

<br>

## **Evaluation Criteria**

---

Replace the entry point of the React app, so that when we run `npm run dev`, we have direct access to the Page Builder.

Our main focus is React, TypeScript and the following criteria. We are open to different tools and libraries as long as the final product meets the criteria. Feel free to replace or add any dependencies that you're comfortable with or which you believe would improve the project.

We **DO NOT** expect you to implement features that isn't indicated in this README. We want you to spend your time only on the Page Builder and not on extra features.

- **Code Quality**: Is the code well-structured, readable, and appropriately commented?
- **Functionality**: Does the Page Builder work as described? Are all of the requirements implemented?
- **Design and Usability**: Is the Page Builder interface intuitive and user-friendly? Do the pages exhibit design consistency, appropriate color schemes, effective typography, and well-structured content layout?
- **Styling**: Has the styling been implemented effectively? Are the given Figma components styled with handmade CSS (Sass, CSS-in-JS, ...)?
- **TypeScript**: Is TypeScript utilized effectively throughout the codebase to ensure type safety and readability?
- **State Management**: Does the code handle state changes smoothly, ensuring consistent and reliable interactions throughout the application?
- **Testing**: Is there comprehensive test suites to ensure the functionality and reliability of the code? Do the tests cover critical parts of the application?

> We understand that this assignment may require a substantial amount of time, however, we request that you limit your efforts to **a maximum of five hours**. We encourage you to prioritize the tasks you believe are most critical. This will provide us insight into your decision-making process and how you manage time constraints.

<br>

## **Available Scripts**

---

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.
Open [http://localhost:5173](http://localhost:5173/) to view it in the browser.

The page will reload if you make edits.

### `npm run test`

Launches the test runner in the interactive watch mode.
