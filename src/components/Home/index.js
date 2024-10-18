import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';

const Home = ({ navigation }) => { 
  return (   
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <View style={styles.navbar}>
            <Image source={require('./assets/logoNGM.png')}  style={styles.logo} />
            <Image source={require('./assets/NGMMEADOTA.png')} style={styles.nome} />
            <TouchableOpacity onPress={() => navigation.navigate('Adoção')}>
              <Text style={styles.navItem}>Adoção</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Sobre')}>
              <Text style={styles.navItem}>Sobre</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Blog')}>
              <Text style={styles.navItem}>Blog</Text>
            </TouchableOpacity>
          </View>    
        </View> 

        <View>
          <Image source={require('./assets/cachorroLenço.png')} style={styles.cachorrolenco} />
        </View>

        <Text style={styles.title}>Conheça o NGM me adota</Text>
        <Text style={styles.description}>
          Este projeto surgiu durante o programa Arena de Desafios do Centro de Inovação e Tecnologia (CIT) da prefeitura de Barueri. 
          Nosso objetivo é conectar ONGs a voluntários e doadores, criando uma rede de apoio e solidariedade.
        </Text>

        <View>
          <Text> 
            <Text style={styles.title}>Veja como Adotar seu Peludinho </Text>
            <Image source={require('./assets/patas.png')} style={styles.patas} />
          </Text>
          <Image source={require('./assets/passo.png')} style={styles.passo} />   
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Nossa plataforma consiste em um sistema inovador para facilitar o processo de adoção de pets. Estamos unindo nossas habilidades em programação, design e gerenciamento de projetos para criar uma plataforma online intuitiva e abrangente. Este sistema permitirá que abrigos de animais, protetores independentes e potenciais adotantes se conectem de forma eficiente.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 0,
  },
  header: {
    backgroundColor: '#008A33', // Cor verde para o cabeçalho
    width: '100%',
    paddingVertical: 10, // Espaçamento vertical
    alignItems: 'center',
    marginBottom: 20,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  navItem: {
    color: '#FFFFFF', // Cor do texto branco
    fontSize: 16,
  },
  title: {
    fontSize: 26,
    color: '#008A33',
    marginVertical: 20,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 90, // Largura ajustada para a logo
    height: 70, // Altura ajustada para a logo
    resizeMode: 'contain', // Garante que a imagem mantenha suas proporções
    marginRight: 10,
  },
  nome: {
    width: 120,
    height: 120,
  },
  passo: {
    width: 390, 
    height: 90, 
    marginBottom: 0,
  },
  patas: {
    width: 30,
    height: 30,
  },
  cachorrolenco: {
    width: 400, 
    height: 185, 
    marginBottom: 20,
  },
  footer: {
    backgroundColor: '#D3D3D3', // Cor cinza para o rodapé
    paddingVertical: 15,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerText: {
    fontSize: 11,
    textAlign: 'center',
    color: '#000',
  },
});

export default Home;
