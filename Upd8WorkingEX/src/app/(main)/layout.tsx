import React from 'react';
import { Search, ShoppingCart, Menu, User, Book, Heart } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BookTable from "./book/BookTable";
import BookSearch from "./book/BookSearch";

const BooksGrid = ({ books }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {books.map((book) => (
      <Card key={book.id} className="flex flex-col justify-between">
        <CardContent className="pt-6">
          <div className="aspect-[2/3] bg-muted rounded-lg mb-4 flex items-center justify-center">
            <Book className="h-12 w-12 text-muted-foreground" />
          </div>
          <h3 className="font-semibold line-clamp-1">{book.title}</h3>
          <p className="text-sm text-muted-foreground">{book.author}</p>
          <p className="mt-2 font-bold text-primary">${book.price}</p>
        </CardContent>
        <CardFooter className="pt-0">
          <Button className="w-full">Add to Cart</Button>
        </CardFooter>
      </Card>
    ))}
  </div>
);

const FeaturedSection = ({ title, children }) => (
  <section className="py-12">
    <div className="container">
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      {children}
    </div>
  </section>
);

export default function BookstoreHomepage() {
  const featuredBooks = [
    { id: 1, title: "The Midnight Library", author: "Matt Haig", price: "16.99", description: "A magical library between life and death" },
    { id: 2, title: "Atomic Habits", author: "James Clear", price: "14.99", description: "Tiny changes, remarkable results" },
    { id: 3, title: "Project Hail Mary", author: "Andy Weir", price: "18.99", description: "An astronaut's solo mission to save humanity" },
    { id: 4, title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", price: "15.99", description: "A Hollywood legend's life story" },
  ];

  const newReleases = [
    { id: 5, title: "Tomorrow Will Be Different", author: "Sarah McBride", price: "19.99", description: "A memoir of love and justice" },
    { id: 6, title: "The Light We Carry", author: "Michelle Obama", price: "24.99", description: "Overcoming uncertain times" },
    { id: 7, title: "Demon Copperhead", author: "Barbara Kingsolver", price: "17.99", description: "A modern retelling of David Copperfield" },
    { id: 8, title: "Trust", author: "Hernan Diaz", price: "16.99", description: "A story of wealth and talent" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-primary">BookClub</h1>
              <NavigationMenu>
                <NavigationMenuList className="hidden md:flex space-x-6">
                  <NavigationMenuItem>
                    <Button variant="ghost">Fiction</Button>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Button variant="ghost">Non-Fiction</Button>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Button variant="ghost">New Releases</Button>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Button variant="ghost">Bestsellers</Button>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:block w-72">
                <BookSearch />
              </div>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Discover Your Next Favorite Book</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our vast collection of books across all genres. Join our community of book lovers today.
            </p>
            <Button size="lg" className="mr-4">Browse Collection</Button>
            <Button variant="outline" size="lg">Join Book Club</Button>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <FeaturedSection title="Featured Books">
        <BooksGrid books={featuredBooks} />
      </FeaturedSection>

      {/* New Releases */}
      <FeaturedSection title="New Releases">
        <BooksGrid books={newReleases} />
      </FeaturedSection>

      {/* Categories Section */}
      <section className="py-12 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Browse Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Fiction', 'Non-Fiction', 'Mystery', 'Science Fiction', 'Romance', 'Biography', 'History', 'Self-Help'].map((category) => (
              <Card key={category} className="hover:border-primary transition-colors cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold">{category}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-primary/5">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest releases, book recommendations, and exclusive offers.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Enter your email" className="max-w-sm" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Help</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Shipping</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Returns</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">All Books</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">New Releases</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Bestsellers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Twitter</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Instagram</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}