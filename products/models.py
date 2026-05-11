from django.db import models

from django.db import models

class Product(models.Model):
    CATEGORY_CHOICES = [
        ("Mobiles", "Mobiles"),
        ("Fashion", "Fashion"),
        ("Electronics", "Electronics"),
        ("Home", "Home"),
        ("Beauty", "Beauty"),
        ("Grocery", "Grocery"),
        ("Books", "Books"),
        ("Appliances", "Appliances"),
    ]

    name = models.CharField(max_length=200)
    price = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to="products/")
    category = models.CharField(
        max_length=100,
        choices=CATEGORY_CHOICES
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name