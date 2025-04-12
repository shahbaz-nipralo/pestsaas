"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Minus } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export default function NewCustomerPage() {
  const [phoneNumbers, setPhoneNumbers] = useState([""]);
  const [hasGst, setHasGst] = useState(false);
  const [gstNumber, setGstNumber] = useState("");
  const [customerType, setCustomerType] = useState("");

  const addPhoneNumber = () => {
    setPhoneNumbers([...phoneNumbers, ""]);
  };

  const removePhoneNumber = (index: number) => {
    if (phoneNumbers.length > 1) {
      const newNumbers = [...phoneNumbers];
      newNumbers.splice(index, 1);
      setPhoneNumbers(newNumbers);
    }
  };

  const handlePhoneNumberChange = (index: number, value: string) => {
    const newNumbers = [...phoneNumbers];
    newNumbers[index] = value;
    setPhoneNumbers(newNumbers);
  };

  const handleCustomerTypeChange = (value: string) => {
    setCustomerType(value);
    // Reset GST fields when changing customer type
    if (value !== "Commercial") {
      setHasGst(false);
      setGstNumber("");
    }
  };

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle className="text-emerald-600">Add New Customer</CardTitle>
          <CardDescription>
            Enter customer details to add them to your database.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="type">Customer Type*</Label>
                  <Select required onValueChange={handleCustomerTypeChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Residential" className=" cursor-pointer">Residential</SelectItem>
                      <SelectItem value="Commercial" className=" cursor-pointer">Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">
                    {customerType === "Commercial"
                      ? "Company Name*"
                      : "Customer Name*"}
                  </Label>
                  <Input
                    id="name"
                    placeholder={
                      customerType === "Commercial"
                        ? "Enter company name"
                        : "Enter full name"
                    }
                    required
                  />
                </div>
              </div>

              {customerType === "Commercial" && (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="has-gst"
                      checked={hasGst}
                      onCheckedChange={(checked) =>
                        setHasGst(checked as boolean)
                      }
                    />
                    <Label htmlFor="has-gst">Has GST Number?</Label>
                  </div>
                  {hasGst && customerType === "Commercial" && (
                    <div className="pt-2">
                      <Label htmlFor="gst">GST Number*</Label>
                      <Input
                        id="gst"
                        value={gstNumber}
                        onChange={(e) => setGstNumber(e.target.value)}
                        placeholder="22ABCDE1234F1Z5"
                        required={!hasGst}
                      />
                    </div>
                  )}
                </div>
              )}
              <div className="space-y-4">
                <Label>Phone Numbers*</Label>
                {phoneNumbers.map((number, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input
                      value={number}
                      onChange={(e) =>
                        handlePhoneNumberChange(index, e.target.value)
                      }
                      placeholder="(555) 123-4567"
                      required
                    />
                    {phoneNumbers.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9"
                        onClick={() => removePhoneNumber(index)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    )}
                    {index === phoneNumbers.length - 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9"
                        onClick={addPhoneNumber}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pan">PAN Number</Label>
                  <Input id="pan" placeholder="ABCDE1234F" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Service Address*</Label>
                <Input id="address" placeholder="Street address" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="city">City*</Label>
                  <Input id="city" placeholder="City" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State*</Label>
                  <Input id="state" placeholder="State" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP Code*</Label>
                  <Input id="zip" placeholder="ZIP" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Enter any special instructions or notes"
                  className="min-h-[100px]"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <Button variant="outline" type="button">
                Cancel
              </Button>
              <Button
                className="bg-emerald-600 hover:bg-emerald-700"
                type="submit"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Customer
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
