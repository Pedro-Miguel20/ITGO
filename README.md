# ITGO 🌈

# Tópicos
* [O que é o ITGO?](#o-que-é-o-itgo-)
* [Requisitos para rodar o projeto](#requisitos-para-rodar-o-projeto-%EF%B8%8F)

# O que é o ITGO? 🤔

*<p>Se você acabou de chegar a este repositório, permita-me apresentar o ITGO. Este é um projeto que está em desenvolvimento há mais de um ano, passando por diversas modificações e ajustes ao longo do caminho.</p>*
*<p>Em resumo, este repositório representa um projeto de website que visa principalmente funcionar como uma plataforma ou rede social. Aqui, você poderá armazenar seus projetos e compartilhá-los através de um feed público.</p>*
*<p>Este projeto está sendo desenvolvido com ênfase no aprendizado.</p>*

# Requisitos para rodar o projeto ⚙️
**Aqui está os requisitos para rodar o projeto em sua máquina:**

  - *PHP >= 8.1*
  - *MariaDB/MySQL*

# Exemplificando o código 👨‍💻

~~~php
class db_class
{
    // Informações para a conexão ao Banco de Dados
    protected $servername = "YourServername";
    protected $user = "YourUser";
    protected $password = "YourPassword";
    protected $database = "YourDatabase"; 

    // Váriavel que armazena a conexão com o Banco de Dados
    protected $conn;

    // Essa é uma Função Construtora ele é chamado automaticamente quando um objeto da classe é instanciado.
    public function __construct()
    {
        // Aqui ocorre a conexão com o Banco de Dados com as informações passadas acima
        $this->conn = new mysqli($this->servername, $this->user, $this->password, $this->database);

        // Retorna mensagem de erro caso não se conecte com o Banco de Dados
        if ($this->conn->connect_error) {
            die("Erro de conexão: " . $this->conn->connect_error);
        }
    }
    // Esta função permite que outros trechos de código obtenham acesso à conexão com o banco de dados. Ela simplesmente retorna o objeto de conexão $conn.
    public function get_connection() {
        return $this->conn;
    }
}
~~~
