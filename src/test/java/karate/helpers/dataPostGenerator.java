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

    public static String generateUniquePass(){
        // Generar UUID
        String uuid = UUID.randomUUID().toString().replaceAll("-", "");
        String lettersOnly = uuid.replaceAll("[^a-zA-Z]", "");

        if (lettersOnly.length() < 5) {
            // Si por alguna razón no hay suficientes letras, generar otro UUID
            return generateUniquePass();
        }

        // Retornar el pass en minuscula
        return lettersOnly.substring(0, 5).toLowerCase();
    }

    public static String generateId(){
        String uuid = UUID.randomUUID().toString().replace("-", "");
        return uuid.substring(0, 8);
    }


    public static String getRandomBooleanAsString() {
        return RANDOM.nextBoolean() ? "true" : "false";
    }


}
