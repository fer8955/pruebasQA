package karate.helpers;

import java.util.UUID;
import java.util.Random;


public class dataPostGenerator {
    //Data para pruebas
    private static final String[] NOMES = {
            "Lucas", "Mateus", "Gabriel", "Rafael", "Pedro",
            "João", "Tiago", "André", "Carlos", "Henrique",
            "Ana", "Maria", "Larissa", "Camila", "Juliana",
            "Carla", "Isabela", "Fernanda", "Patrícia", "Letícia"
    };

    private static final String[] SOBRENOMES = {
            "Silva", "Souza", "Oliveira", "Santos", "Pereira",
            "Lima", "Ferreira", "Almeida", "Gomes", "Martins",
            "Barbosa", "Ribeiro", "Dias", "Moura", "Rodrigues"
    };

    private static final Random RANDOM = new Random();

    /**
     * Genera un correo electrónico único utilizando un UUID.
     * Ejemplo: test_9f03c08b@qa.com
     */
    public static String generateUniqueEmail() {
        String uuid = UUID.randomUUID().toString().replace("-", "").substring(0, 8);
        return "test_" + uuid + "@qa.com";
    }

    public static String generateUniqueNome() {
        String nome = NOMES[RANDOM.nextInt(NOMES.length)];
        String sobrenome = SOBRENOMES[RANDOM.nextInt(SOBRENOMES.length)];
        return nome + " " + sobrenome;
    }

    public static String getRandomBooleanAsString() {
        return RANDOM.nextBoolean() ? "true" : "false";
    }


}
