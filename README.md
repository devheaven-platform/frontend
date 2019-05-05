# Frontend
[![Build Status](http://drone.devheaven.nl/api/badges/devheaven-platform/frontend/status.svg)](http://drone.devheaven.nl/devheaven-platform/frontend)

This repository contains the frontend for the DevHeaven platform.

# Conventions

### 1. Files
Conventions for naming files.

* Never use `index.js` as a file name only if you need to export a lot of different files from one directory.
* Keep filenames simple use `Home.js` for a `PageHome` component.
* Always prefix file names with a capital letter.

### 2. Components
Conventions for naming and creating components.

* Prefix the component names with folder or their type i.e. `PageHome` and `BoardColumn` instead of `Home` and `Column`.
* Use a captial letter for functions that call the backend in pages (neglect this in components).
* Use a lower case letter for functions that don't call the backend.

### 3. Types
Conventions for naming and creating types.

* Try to keep types simple use `LOAD` instead of `LOAD_PROJECT`.
* Use the `LOAD` type to fetch data in `componentDidMount()`.
* Create types of `_SUCCESS` and `_ERROR` if you're using a form.

### 4. Actions
Conventions for naming and creating actions

* Try to keep action names simple like `load` instead of `loadBoard`.
* Always use `payload` as parameter name if you need to pass values to an action.

### 5. Reducers
Conventions for naming and creating reducers.

* Tryu to keep reducers names as a single word.
* Try to split reducers if they are becoming to large.

### 6. Sagas
Conventions for naming and creating sagas.

* Try to keep names generic use `load` instead of `getProjects` or `loadProjects`.
* When you need a value from state use selectors.
* Use the `APP_ERROR` type to display errors for load, archive and delete actions.
* Use the `errorSelector` as a type to display errors for create and update actions.
* Use the `__Stub__.js` file to mock the API if needed.

### 7. General
General conventions.

* When you need to display a list of items use the `Table` component.
* When you need to create or update a item use the `ModalForm` component.
* Use the color `red` as background for archive and delete buttons.
* Use the `PageLoading` component when you need to fetch data from the API to display a loading page.
* Try to keep pages under 200 lines.
* Try to keep components under 100 lines.
* Put all the data logic in the pages.
* Use components to visualize items.
* Try to make components generic so they can be reused.

# Contribution
There are probably some points of improvement in the application design, structure or code.

If you believe there is a best practice I have not followed, please let me know by opening an issue on the issue tracker. Pull requests are welcome!

# License
DevHeaven is released under the [MIT license](http://opensource.org/licenses/MIT):

```
The MIT License (MIT)

Copyright (c) 2019 DevHeaven

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
