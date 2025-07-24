import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { 
  Container, 
  Box,
  Button,
  Typography,
  CardContent
} from "@mui/material";
import { RootState } from "../../app/store";
import { useTranslation } from "react-i18next";
import {
  HeroSection,
  FeatureCard,
  FeaturesContainer,
  TitleWithUnderline,
  WhiteButton,
  BlueButton,
  CtaBox
} from "../styles/Home/Home.styles";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const handleAuthClick = () => {
    if (isAuthenticated) {
      dispatch(logout());
    } else {
      dispatch(login({
        token: 'dummy-token',
        user: {
          id: '1',
          name: 'Salma Hussein',
          role: 'student',
        },
      }));
      navigate("/dashboard");
    }
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  const features = t("home.features", { returnObjects: true }) as {
    title: string;
    description: string;
  }[];

  return (
    <Box sx={{ pt: 4, pb: 8 }}>
      <HeroSection elevation={4}>
        <Container maxWidth="md" sx={{ position: "relative" }}>
          {/* زر تغيير اللغة */}
          <Box sx={{ position: "absolute", top: 16, right: 16 }}>
            <Button variant="text" color="inherit" onClick={toggleLanguage}>
              🌐 {i18n.language === "en" ? "العربية" : "English"}
            </Button>
          </Box>

          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700, textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
            {t("home.welcome")}
          </Typography>
          <Typography variant="h5" component="p" sx={{ mb: 4, opacity: 0.9 }}>
            {t("home.subtitle")}
          </Typography>
          <WhiteButton
            variant="contained"
            size="large"
            onClick={handleAuthClick}
          >
            {isAuthenticated ? t("home.dashboard") : t("home.login")}
          </WhiteButton>
        </Container>
      </HeroSection>

      <Container maxWidth="lg">
        <TitleWithUnderline variant="h4" align="center" gutterBottom>
          {t("home.featuresTitle")}
        </TitleWithUnderline>

        <FeaturesContainer>
          {features.map((feature, index) => (
            <Box key={index}>
              <FeatureCard>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" gutterBottom sx={{ color: '#144272', fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Box>
          ))}
        </FeaturesContainer>

        <CtaBox>
          <Typography variant="h4" gutterBottom sx={{ color: '#144272', fontWeight: 600 }}>
            {t("home.readyTitle")}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}>
            {t("home.readyDesc")}
          </Typography>
          <BlueButton
            variant="contained"
            size="large"
            onClick={handleAuthClick}
          >
            {isAuthenticated ? t("home.dashboard") : t("home.signup")}
          </BlueButton>
        </CtaBox>
      </Container>
    </Box>
  );
};

export default Home;