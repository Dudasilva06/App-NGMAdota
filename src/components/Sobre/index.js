import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SobreScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../Home/assets/caramelo.png')} style={styles.caramelo} />
        <Text style={styles.title}>NGM me adota</Text>
        <Text style={styles.description}>
          Este projeto surgiu durante o programa de estágio no Centro de Inovação e Tecnologia (CIT) da prefeitura de Barueri.
          Ao tomarmos conhecimento da realidade dos animais de rua, sentimos o desejo de utilizar nossos conhecimentos para
          auxiliar e contribuir com a sociedade. Foi então que criamos uma plataforma simples e direta para ajudar a conectar 
          animais em busca de um lar com famílias amorosas.
        </Text>
        <Text style={styles.description}>
          Nossa proposta seguiu por um caminho não óbvio, trazendo à tona a campanha "ninguém me adota",
          para demonstrar que, apesar de tantos animais precisando de um lar e com tanto amor para dar, as pessoas 
          ainda procuram criadouros de animais que muitas vezes estão apenas preocupados com o aspecto financeiro.
          Junte-se a nós nesta missão de amor e compaixão.
        </Text>
      </View>
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
    padding: 10,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 230, // Adiciona margem inferior para evitar sobreposição com o rodapé
  },
  title: {
    color: '#008A33',
    fontSize: 24,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  caramelo: {
    width: 400, 
    height: 200, 
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
    fontSize: 14,
    textAlign: 'center',
    color: '#000',
  },
});

export default SobreScreen;
