# Libraries / Technologies Used

Ant Design
Bootstrap
Redux Toolkit
Toastify
Sass
UUID
Jest

## Features

A toast notification is displayed when a product is added to the cart.
If a non-existent page is visited, the Not Found component appears.
The number of items in pagination is not statically set to 12, but can be customized in multiples of 12.
Clicking the Checkout button empties the entire cart.
Fully responsive design.
When a product is added to the cart, it is also saved to local storage.
Upon initial loading, if there are no items in local storage, the cart is empty; otherwise, it continues with previous values.
Autocomplete functionality is available in the product search section.

Notes
I didn't feel the need to use debounce/throttle in the search section since I didn't have an appropriate API for searching.
I added a 1-second timeout to API requests to display the spinner (for simulation purposes).
I truncated the description part of the card in the product detail section to match the design; using the full description would have disrupted the card structure.
I'm aware that my unit tests with Jest are incomplete as I haven't written Jest unit tests before, and I will focus on improving this area.
Live version of the project: https://main--hilarious-crepe-a1352e.netlify.app/
