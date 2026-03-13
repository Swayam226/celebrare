# Photo Gallery – Frontend Assignment

## Overview

This project is a responsive photo gallery built using **React + Vite** and styled with **Tailwind CSS**.  
It fetches images from the **Picsum Photos API** and displays them in a responsive grid layout.

The application includes real-time search filtering, favourites management using **useReducer**, and persistence using **localStorage**.

---

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript
- Picsum Photos API

---

## Features

### 1. Fetch Photos from API

- The application fetches **30 photos** from the Picsum Photos API when the page loads.
- The fetching logic is implemented inside a **custom React hook** called `useFetchPhotos`.

### 2. Loading and Error Handling

- A **loading spinner** is displayed while the photos are being fetched.
- If the API request fails, an **error message** is shown to the user.

### 3. Responsive Grid Layout

The gallery is fully responsive.

- **Desktop:** 4 columns
- **Tablet:** 2 columns
- **Mobile:** 1 column

Each photo card displays:

- The image
- Author name
- Favourite toggle button

### 4. Real-Time Search Filter

- A search input allows users to filter photos by **author name**.
- Filtering happens **in real time** using the already fetched data.
- No additional API requests are made during search.

### 5. Favourites System

Users can mark photos as favourites using the heart icon.

- Favourites are managed using **useReducer**
- Favourite photos are **persisted using localStorage**
- Favourites remain saved even after refreshing the page

---

## Components

### Gallery

Main component that:

- Fetches photo data using the custom hook
- Handles search filtering
- Manages favourites state using `useReducer`
- Renders the responsive grid of photos

### PhotoCard

Displays:

- Photo image
- Author name
- Favourite toggle button

### SearchBar

Input component used for filtering photos by author name.

### Spinner

Loading indicator displayed while photos are being fetched.

---

## Custom Hook

### useFetchPhotos

This hook is responsible for fetching photos from the API.

It returns three values:

- `photos` – the list of images returned from the API
- `loading` – indicates whether the API request is in progress
- `error` – contains an error message if the request fails

This separates **data fetching logic from UI components**.

---

## Reducer

### favouritesReducer

The favourites state is managed using **useReducer**.

Supported actions:

- `TOGGLE_FAV` – adds or removes a photo from favourites
- `INIT` – initializes favourites from `localStorage`

This approach centralizes state update logic and keeps the component cleaner.

---

## Performance Hooks

### useCallback

Used to memoize the search handler function so that it is not recreated on every render.

### useMemo

Used to memoize the filtered photo list so the filtering logic only runs when:

- the photo list changes
- the search input changes

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd photo-gallery
```

```
npm install
npm run dev
```

open the application http://localhost:5173 in your browser

## API

Picsum Photos API: https://picsum.photos/v2/list?limit=30
