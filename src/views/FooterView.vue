<template>
    <footer class="footer">
      <v-container>
        <v-row class="footer-content">
          <v-col class="footer-links" cols="12" md="12">
            <div class="social-icons">
              <a
                v-for="(link, index) in links"
                :key="index"
                :href="link.url"
                target="_blank"
                class="social-icon"
                :title="link.text"
              >
                <font-awesome-icon :icon="link.icon" />
              </a>
            </div>
          </v-col>
          <v-col class="footer-rights" cols="12" md="12">
            <p class="rights-message">
              Vue Shop © {{ new Date().getFullYear() }} Todos los derechos reservados.
            </p>
          </v-col>
        </v-row>
      </v-container>
      <a
        href="https://wa.me/+18096988504"
        class="whatsapp-button"
        target="_blank"
      >
        <font-awesome-icon icon="fa-brands fa-whatsapp" />
      </a>
    </footer>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
  import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
  
  // Add icons to the library
  library.add(faWhatsapp, faInstagram, faLinkedin, faGithub)
  
  const links = ref([
    { text: 'Instagram', url: 'https://www.instagram.com/anyiamz', icon: ['fab', 'instagram'] },
    { text: 'LinkedIn', url: 'https://linkedin.com/in/anyelina-almanzar', icon: ['fab', 'linkedin'] },
    { text: 'GitHub', url: 'https://github.com/AngieAmz', icon: ['fab', 'github'] },
    { text: 'Website', url: 'https://anyelina-almanzar.netlify.app/', icon: ['fas', 'globe'] },
  ])
  </script>
  
  <style scoped>
  .footer {
    background-color: #f8f9fa;
    padding: 20px;
    position: relative;
    text-align: center;
  }
  
  .footer-content {
    align-items: center;
  }
  
  .social-icons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .social-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #00bd7e;
    color: white;
    font-size: 20px;
    text-decoration: none;
    transition: background-color 0.3s;
  }
  
  .social-icon:hover {
    background-color: #049061;
  }
  
  .footer-rights {
    margin-top: 10px;
  }
  
  .rights-message {
    margin: 0;
    font-size: 14px;
    color: #6c757d;
  }
  
  .whatsapp-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #25d366;
    color: white;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
    font-size: 24px;
    text-decoration: none;
  }
  
  .whatsapp-button:hover {
    background-color: #128C7E;
  }
  </style>
  