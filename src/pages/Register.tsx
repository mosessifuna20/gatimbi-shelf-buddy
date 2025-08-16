import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { BookOpen } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Register = () => {
  const [userType, setUserType] = useState<"adult" | "junior">("adult");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    nationalId: "",
    birthCertificate: "",
    guardianName: "",
    guardianPhone: "",
    guardianEmail: "",
    guardianId: "",
    school: "",
    customSchool: ""
  });

  const centralImentiSchools = [
    // Primary Schools
    "Gatimbi Primary School",
    "St. Joseph's Primary School",
    "Kiirua Primary School",
    "Kianjai Primary School",
    "Mitunguu Primary School",
    "Kiegoi Primary School",
    "Nkubu Primary School",
    "Timau Primary School",
    
    // Secondary Schools  
    "Central Imenti Secondary School",
    "Meru High School",
    "Blessed Sacrament Girls",
    "Kianjai Secondary School",
    "Mitunguu Secondary School",
    "Nkubu Secondary School",
    "St. Francis Kiegoi Secondary",
    "Timau Secondary School",
    
    // Colleges & Universities
    "Meru Teachers College",
    "Kenya Methodist University",
    "Meru University of Science & Technology",
    "Chuka University - Meru Campus",
    
    // Private Schools
    "Private Academy Central Imenti",
    "St. Augustine Academy",
    "Precious Blood Academy",
    "Mount Kenya Academy",
    "Other (Please specify)"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration logic with Supabase
    console.log("Registration form submitted:", { userType, ...formData });
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <main className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold">Join Gatimbi Library</CardTitle>
              <CardDescription>
                Create your account to access our collection and services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* User Type Selection */}
                <div className="space-y-3">
                  <Label>Membership Type</Label>
                  <RadioGroup
                    value={userType}
                    onValueChange={(value) => setUserType(value as "adult" | "junior")}
                    className="flex space-x-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="adult" id="adult" />
                      <Label htmlFor="adult">Adult Member</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="junior" id="junior" />
                      <Label htmlFor="junior">Junior Member</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Basic Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  
                  {userType === "adult" && (
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {userType === "adult" && (
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        placeholder="+254 700 000000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  )}

                  {userType === "adult" ? (
                    <div className="space-y-2">
                      <Label htmlFor="nationalId">National ID *</Label>
                      <Input
                        id="nationalId"
                        placeholder="Enter National ID"
                        value={formData.nationalId}
                        onChange={(e) => setFormData({ ...formData, nationalId: e.target.value })}
                        required
                      />
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Label htmlFor="birthCertificate">Birth Certificate Number *</Label>
                      <Input
                        id="birthCertificate"
                        placeholder="Enter Birth Certificate Number"
                        value={formData.birthCertificate}
                        onChange={(e) => setFormData({ ...formData, birthCertificate: e.target.value })}
                        required
                      />
                    </div>
                  )}
                </div>

                {/* Junior Member Specific Fields */}
                {userType === "junior" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="school">School *</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, school: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your school" />
                        </SelectTrigger>
                        <SelectContent>
                          {centralImentiSchools.map((school) => (
                            <SelectItem key={school} value={school}>
                              {school}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {formData.school === "Other (Please specify)" && (
                      <div className="space-y-2">
                        <Label htmlFor="customSchool">Specify Your School *</Label>
                        <Input
                          id="customSchool"
                          placeholder="Enter your school name"
                          value={formData.customSchool}
                          onChange={(e) => setFormData({ ...formData, customSchool: e.target.value })}
                          required
                        />
                      </div>
                    )}

                    {/* Guardian Details */}
                    <div className="border-t pt-4 mt-6">
                      <h3 className="text-lg font-semibold mb-4">Guardian Details</h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="guardianName">Guardian Name *</Label>
                          <Input
                            id="guardianName"
                            placeholder="Enter guardian name"
                            value={formData.guardianName}
                            onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="guardianPhone">Guardian Phone *</Label>
                          <Input
                            id="guardianPhone"
                            placeholder="+254 700 000000"
                            value={formData.guardianPhone}
                            onChange={(e) => setFormData({ ...formData, guardianPhone: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="guardianEmail">Guardian Email *</Label>
                          <Input
                            id="guardianEmail"
                            type="email"
                            placeholder="Enter guardian email"
                            value={formData.guardianEmail}
                            onChange={(e) => setFormData({ ...formData, guardianEmail: e.target.value })}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="guardianId">Guardian ID *</Label>
                          <Input
                            id="guardianId"
                            placeholder="Enter guardian National ID"
                            value={formData.guardianId}
                            onChange={(e) => setFormData({ ...formData, guardianId: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <Button type="submit" className="w-full btn-library">
                  Submit Registration
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  Your registration will be reviewed by library staff before approval.
                </p>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary hover:underline font-medium">
                    Sign in here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;