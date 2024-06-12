# Grocery List Application

## Overview

This project is a grocery list application built with Angular using standalone components. It allows users to drag and drop items from a list into specific categories (Fruits, Vegetables, Meats). The design and functionality are based on the provided design and requirements.

## Features

- **Drag and Drop**: Users can drag grocery items and drop them into specific categories.
- **Categorized Drop Zones**: Three drop zones for Fruits, Vegetables, and Meats.
- **Real-Time Update**: Items disappear from the main list and appear in the respective category when dropped.
- **Responsive Design**: The application layout adapts to different screen sizes.
- **Routing**: Navigable views for different categories.
- **Searching**: Searching in products 
- **Counting**: Counting the number of products

## Project Structure

- `src/app/product-list`: Main component displaying the grocery items and drop zones.
- `src/app/fruits`: Component displaying all the list of products.
- `src/app/fruits`: Component displaying the list of fruits.
- `src/app/vegetables`: Component displaying the list of vegetables.
- `src/app/meats`: Component displaying the list of meats.
- `src/app/app.routes.ts`: Defines the application routes.

## Getting Started

### Prerequisites

- Node.js and npm installed
- Angular CLI installed

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/TheXtn/groceries-front.git
   cd grocery-list
   ```

2. Install dependencies:
   ```npm install
   npm install
    ```


### Running the Application

1. Start the dev server
    ```ng serve
    ng serve
    ```

### Running the Application with Docker
## Building the Docker Image

1. Make sure you have Docker installed on your machine.

2. Build the Docker image by running the following command in the root directory of your project:

   ```sh
   docker build -t groceries-front .
## Running the Docker Container

1. After the image is built, you can run a container using the following command:

   ```sh
   docker run -d -p 8080:8080 groceries-front




    

## Application Routes

- **Home**: `http://localhost:4200` - Main view with the grocery list and drop zones.
- **Fruits**: `http://localhost:4200/fruits` - View displaying the list of fruits.
- **Vegetables**: `http://localhost:4200/vegetables` - View displaying the list of vegetables.
- **Meats**: `http://localhost:4200/meats` - View displaying the list of meats.
