# PrestaShop BO themes package

PrestaShop BO Themes is an NPM package designed to facilitate the use of PrestaShop Back-Office themes in environments like Storybook. By simply installing the package and importing the desired files, you can easily integrate these themes into your projects.

## Installation

To install the package, run the following command:

```sh
npm install prestashop-bo-themes
```

## Import for Each Version
### V 1.7.3.0
#### default
```css
/* css files */
@import 'prestashop-bo-themes/1.7.3.0/default/theme.css';
```
```js
// js files
import 'prestashop-bo-themes/1.7.3.0/default/theme.js'
```

#### new-theme
```css
/* css files */
@import 'prestashop-bo-themes/1.7.3.0/new-theme/theme.css';
```
```js
// js files
import 'prestashop-bo-themes/1.7.3.0/new-theme/theme.js'
```

### V 1.7.8.0
WORK IN PROGRESS

### V 9.0.0
WORK IN PROGRESS

## Contributing
> [!WARNING]
> Contributions are welcome, but please note the following guidelines:
>
> * Contributions should be focused on modifications that ensure the proper functioning of the package.
> * Direct customization of the themes is not permitted. The goal is to represent the themes exactly as they are present in the PrestaShop Core.

If you would like to contribute to this project, please follow these steps:

* Fork the repository.
* Create a new branch (git checkout -b feature-branch).
* Make your changes.
* Commit your changes (git commit -m 'Add new feature').
* Push to the branch (git push origin feature-branch).
* Create a new Pull Request.

## License
This project is licensed under the [MIT License](LICENSE).


