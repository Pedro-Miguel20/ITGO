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

~~~php
class form_class
{
  // Conteúdo do Login e Sign //
}
~~~

~~~php
public function login_function()
{
  // Instanciando a classe de banco de dados
  $db = new db_class();
  // Obtendo a conexão com o banco de dados
  $conn = $db->get_connection();

    // Verificando se os campos do formulário foram enviados
    if(isset($_POST["user-name-login-name"]) && isset($_POST["password-login-name"]) && isset($_POST["submit-login-name"]))
    {
        // Armazenando os valores enviados via POST
        $post_username_login = $_POST["user-name-login-name"];
        $post_password_login = $_POST["password-login-name"];
        $post_submit_login = $_POST["submit-login-name"];

        // Preparando e executando uma instrução preparada para selecionar o usuário com o nome de usuário fornecido
        $stmt = $conn->prepare("SELECT * FROM User WHERE username = ?");

        // Ligando os parâmetros à instrução preparada
        $stmt->bind_param("s", $post_username_login);

        // Executando a instrução preparada
        $stmt->execute();

        // Obtendo o resultado da consulta
        $result_sign_instruction_sql = $stmt->get_result();

        // Obtendo os dados do usuário
        $user_data = $result_sign_instruction_sql->fetch_assoc();
        
        // Verificando se os dados do usuário foram encontrados
        if($user_data)
        {
            // Verificando se a senha fornecida corresponde à senha armazenada no banco de dados
            if(password_verify($post_password_login, $user_data['password']))
            {
                // Regenerando o ID da sessão para evitar ataques de fixação de sessão
                session_regenerate_id();
                
                // Armazenando os dados do usuário na sessão
                $_SESSION['user_data_id'] = $user_data['id'];
                $_SESSION['user_data_username'] = $user_data['username'];
                
                // Redirecionando para a página principal após o login bem-sucedido
                echo '<script>window.location.href = "https://portfolioshared.com.br/";</script>';
                // Finalizando o script para evitar execução adicional
                exit();
            }
        }
    }
}
~~~
