import React from 'react';
import Link from '@mui/material/Link';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SecurityIcon from '@mui/icons-material/Security';
import { Typography, Button, Container, Grid, Card, CardMedia, CardContent, Box } from "@mui/material";
import './index.css'; // Asegúrate de que esté importado

export default function Portfolio() {
  return (
    <div className="portfolio-wrapper">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <img src="/brais-dev-logo.svg" alt="Brais Dev logo" className="logo" />
          <nav>
            <ul className="nav-list">
              <li><Link href="#servicios" underline="none" sx={{fontSize: '1rem',transition: 'all 0.3s ease','&:hover': {fontSize: '1.2rem',},}}>Servicios</Link></li>
              <li><Link href="#proyectos" underline="none" sx={{fontSize: '1rem',transition: 'all 0.3s ease','&:hover': {fontSize: '1.2rem',},}}>Proyectos</Link></li>
              <li><Link href="#contacto" underline="none" sx={{fontSize: '1rem',transition: 'all 0.3s ease','&:hover': {fontSize: '1.2rem',},}}>Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <h2 className="animate-banner-text">Diseño Web & Seguridad Digital</h2>
        <p className="animate-banner-text">Creo sitios web modernos, rápidos y seguros para profesionales y negocios locales.</p>
      </section>

      {/* Servicios */}
      <section id="servicios" className="section">
        <h3 className="section-title">Servicios</h3>
        <div className="card-container">
          <div className="card">
            <DesignServicesIcon className="animate-card-icon"/>
            <h4 className="animate-card-category">Diseño Web</h4>
            <p className="animate-card-description">Sitios rápidos, responsive y optimizados para SEO. WordPress, HTML/CSS o React.</p>
          </div>
          <div className="card">
            <EngineeringIcon className="animate-card-icon"/>
            <h4 className="animate-card-category">Mantenimiento</h4>
            <p className="animate-card-description">Actualizaciones, copias de seguridad, ajustes de rendimiento y corrección de errores.</p>
          </div>
          <div className="card">
            <SecurityIcon className="animate-card-icon"/>
            <h4 className="animate-card-category">Seguridad Web</h4>
            <p className="animate-card-description">Protección contra ataques, configuración HTTPS, backups y seguridad WordPress.</p>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="section white">
        <h3 className="section-title">Proyectos</h3>
        <div className="card-container">
          <Grid container spacing={3}>
            
            {/* Tarjeta 1 */}
            <Grid item xs={12} md={4}>
              <Card className="card" sx={{backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', textAlign: 'center', padding: 2, transition: 'transform 0.3s ease, box-shadow 0.3s ease','&:hover': {transform: 'scale(1.03)',boxShadow: 6,},}}>
                <CardMedia component="img" height="200" image="./src/assets/descarga.jpeg" />
                <CardContent>
                  <Typography variant="h5" color="black" align="center" gutterBottom>Makeup Soguru</Typography>
                  <Typography variant="body2" color="textSecondary" align="center" paragraph>Los mejores tratamientos para realzar tu belleza.</Typography>
                  <Button component="a" href="http://localhost:3000" target="_blank" rel="noopener noreferrer" variant="contained" fullWidth sx={{ backgroundColor: "black", color:"white",marginTop: 2, "&:hover": {backgroundColor: "#333 !important"}, }}>
                    Ver más
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className="card" sx={{backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', textAlign: 'center', padding: 2,transition: 'transform 0.3s ease, box-shadow 0.3s ease','&:hover': {transform: 'scale(1.03)',boxShadow: 6,},}}>
                  <CardMedia component="img" height="200" image="./src/assets/descarga.jpeg" />
                  <CardContent>
                    <Typography variant="h5" color="black" align="center">Barbería Nova</Typography>
                    <Typography variant="body2" color="textSecondary" align="center" paragraph>Web moderna con botón de reservas y galería de cortes.</Typography>
                  <Button variant="contained" fullWidth sx={{ backgroundColor: "black", color:"white",marginTop: 2, "&:hover": {backgroundColor: "#333 !important"}, }}>
                    Ver más
                  </Button>
                  </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className="card" sx={{backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', textAlign: 'center', padding: 2, transition: 'transform 0.3s ease, box-shadow 0.3s ease','&:hover': {transform: 'scale(1.03)',boxShadow: 6,},}}>
                  <CardMedia component="img" height="200" image="./src/assets/yoga.png" />
                  <CardContent>
                    <Typography variant="h5" color="black" align="center">Yoga con Alma</Typography>
                    <Typography variant="body2" color="textSecondary" align="center" paragraph>Calendario de clases, formulario de contacto y blog.</Typography>
                  <Button component="a" href="http://localhost:3000" target="_blank" rel="noopener noreferrer" variant="contained" fullWidth sx={{ backgroundColor: "black", color:"white",marginTop: 2, "&:hover": {backgroundColor: "#333 !important"}, }}>
                    Ver más
                  </Button>
                  </CardContent>
                </Card>
            </Grid>
          </Grid>
          <div className="card">
            <img src="/assets/yoga.png" alt="Yoga con Alma" className="card-icon" />
            <h4>Yoga con Alma</h4>
            <p>Calendario de clases, formulario de contacto y blog.</p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="section contact">
        <h3 className="section-title">Contacto</h3>
        <p>¿Te interesa una web moderna y segura? ¡Hablemos!</p>
        <a href="mailto:braisbusquegoni@icloud.com" className="contact-button">Escríbeme</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Brais Dev. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
