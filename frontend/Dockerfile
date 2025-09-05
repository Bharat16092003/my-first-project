# Use official Apache image as base
FROM httpd:2.4

# Copy frontend HTML, CSS, JS into Apache's web directory
COPY ./ /usr/local/apache2/htdocs/

# Apache will automatically serve index.html from htdocs/
EXPOSE 80

