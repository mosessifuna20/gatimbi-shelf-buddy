import { useState } from "react";
import { Search, Filter, BookOpen, Users, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Books = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  // Mock book data - would be fetched from Supabase
  const books = [
    {
      id: 1,
      title: "Introduction to Mathematics",
      author: "John Kamau",
      subject: "Mathematics",
      type: "junior",
      price: 1200,
      copies: 5,
      accessNo: "MAT001",
      publishDate: "2023",
      category: "textbook",
      available: true
    },
    {
      id: 2,
      title: "History of Kenya",
      author: "Mary Wanjiku",
      subject: "History",
      type: "adult",
      price: 1800,
      copies: 3,
      accessNo: "HIS002",
      publishDate: "2022",
      category: "textbook",
      available: true
    },
    {
      id: 3,
      title: "Daily Nation - January 2024",
      author: "Nation Media",
      subject: "Current Affairs",
      type: "all",
      price: 50,
      copies: 10,
      accessNo: "NEWS001",
      publishDate: "2024",
      category: "newspaper",
      available: false
    },
    {
      id: 4,
      title: "KASNEB CPA Study Guide",
      author: "KASNEB",
      subject: "Accounting",
      type: "adult",
      price: 2500,
      copies: 2,
      accessNo: "KAS001",
      publishDate: "2023",
      category: "kasneb",
      available: false
    }
  ];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || book.category === selectedCategory;
    const matchesType = selectedType === "all" || book.type === selectedType || book.type === "all";
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const getTypeIcon = (type: string) => {
    if (type === "junior") return <GraduationCap className="h-4 w-4" />;
    if (type === "adult") return <Users className="h-4 w-4" />;
    return <BookOpen className="h-4 w-4" />;
  };

  const getTypeColor = (type: string) => {
    if (type === "junior") return "bg-green-100 text-green-800";
    if (type === "adult") return "bg-blue-100 text-blue-800";
    return "bg-gray-100 text-gray-800";
  };

  const getCategoryColor = (category: string) => {
    if (category === "kasneb") return "bg-orange-100 text-orange-800";
    if (category === "newspaper") return "bg-purple-100 text-purple-800";
    return "bg-primary/10 text-primary";
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <main className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Collection</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our extensive collection of books, newspapers, and educational materials
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-card p-6 rounded-lg shadow-sm mb-8">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search books, authors, or subjects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="textbook">Textbooks</SelectItem>
                  <SelectItem value="newspaper">Newspapers</SelectItem>
                  <SelectItem value="kasneb">KASNEB Materials</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Access Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="junior">Junior</SelectItem>
                  <SelectItem value="adult">Adult</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Books Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <Card key={book.id} className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{book.title}</CardTitle>
                      <CardDescription>by {book.author}</CardDescription>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge className={getTypeColor(book.type)}>
                        <div className="flex items-center space-x-1">
                          {getTypeIcon(book.type)}
                          <span className="capitalize">{book.type}</span>
                        </div>
                      </Badge>
                      <Badge className={getCategoryColor(book.category)}>
                        {book.category.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Subject:</span>
                        <p className="font-medium">{book.subject}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Access No:</span>
                        <p className="font-medium">{book.accessNo}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Price:</span>
                        <p className="font-medium">KSh {book.price}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Published:</span>
                        <p className="font-medium">{book.publishDate}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="text-sm">
                        <span className="text-muted-foreground">Copies:</span>
                        <span className="font-medium ml-1">{book.copies}</span>
                      </div>
                      
                      {book.category === "kasneb" ? (
                        <Badge variant="secondary">Reference Only</Badge>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <div className={`h-2 w-2 rounded-full ${book.available ? 'bg-success' : 'bg-destructive'}`} />
                          <span className="text-sm font-medium">
                            {book.available ? 'Available' : 'Borrowed'}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {book.available && book.category !== "kasneb" && (
                      <Button className="w-full btn-library mt-4">
                        Request Book
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No books found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or browse all books
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Books;