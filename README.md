# AKARA

A Flask landing page for a Nigerian akara food brand.

## Features

- Responsive landing page
- Menu cards and bag/cart interaction
- Flask app structure with static assets and templates

## Setup

1. Create and activate a virtual environment
2. Install dependencies:

   ```bash
   pip install -r requirement.txt
   ```

3. Run the app:

   ```bash
   python blog.py
   ```

4. Open the app in your browser at:

   ```text
   http://127.0.0.1:5000/
   ```

## Project structure

- `app/` — Flask app package
- `app/templates/` — HTML templates
- `app/static/` — CSS and JavaScript
- `blog.py` — app entry point
- `config.py` — configuration settings
- `requirement.txt` — Python dependencies

## Notes

- The app uses Flask and a simple Jinja template layout.
- A secret key can be set with an environment variable named `SECRET_KEY`.
