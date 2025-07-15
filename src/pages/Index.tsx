import { useState } from "react";
import { ArrowRight, Users, Stethoscope, Heart, Shield, Globe, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import LanguageSelector from "@/components/LanguageSelector";
import { useTranslation } from "react-i18next";

const Index = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/10">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-primary">U - Unified Care</h1>
        </div>
        <LanguageSelector />
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-5xl font-bold text-primary mb-6">
          {t("auth.welcome")} <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">U - Unified Care</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t("auth.subtitle")}
        </p>

        {/* Login Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => navigate('/patient/auth')}>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl">{t("auth.patientLogin")}</CardTitle>
              <CardDescription>Access your health dashboard and manage your family's health</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" onClick={() => navigate('/patient/auth')}>
                Continue as Patient
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => navigate('/doctor/auth')}>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl">{t("auth.doctorLogin")}</CardTitle>
              <CardDescription>Manage your practice and provide quality healthcare</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" onClick={() => navigate('/doctor/auth')}>
                Continue as Doctor
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="font-semibold mb-2">Emergency SOS</h3>
            <p className="text-sm text-muted-foreground">One-touch emergency response with instant location sharing</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Globe className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-2">Multilingual Support</h3>
            <p className="text-sm text-muted-foreground">Available in 6+ Indian languages for better accessibility</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold mb-2">Secure & Private</h3>
            <p className="text-sm text-muted-foreground">End-to-end encrypted health data with HIPAA compliance</p>
          </div>
        </div>

        {/* Quick Demo Access */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">Want to explore the features?</p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" onClick={() => navigate('/patient/dashboard')}>
              View Patient Demo
            </Button>
            <Button variant="outline" onClick={() => navigate('/doctor/dashboard')}>
              View Doctor Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
