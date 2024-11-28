const request = require('supertest'); // Importando o Supertest
const BASE_URL = 'https://swapi.dev/api'; // URL base da SWAPI

describe('Testes da API SWAPI', () => {
    // Testes básicos
    it('Deve retornar status 200 para /people/1', async () => {
        const response = await request(BASE_URL).get('/people/1');
        expect(response.status).toBe(200);
    });

    it('Deve retornar o nome correto para /people/1', async () => {
        const response = await request(BASE_URL).get('/people/1');
        expect(response.body.name).toBe('Luke Skywalker');
    });

    it('Deve conter o campo "height" como uma string em /people/1', async () => {
        const response = await request(BASE_URL).get('/people/1');
        expect(response.body.height).toBeDefined();
        expect(typeof response.body.height).toBe('string');
    });

    it('Deve retornar 82 resultados em /people', async () => {
        const response = await request(BASE_URL).get('/people/');
        expect(response.body.count).toBe(82);
    });

    it('Deve conter a URL para a próxima página de resultados em /people', async () => {
        const response = await request(BASE_URL).get('/people/');
        expect(response.body.next).toContain('/people/?page=2');
    });

    it('Deve retornar 2 veículos para /people/1', async () => {
        const response = await request(BASE_URL).get('/people/1');
        expect(response.body.vehicles.length).toBe(2);
    });

    it('Deve retornar status 404 para uma pessoa inexistente', async () => {
        const response = await request(BASE_URL).get('/people/9999');
        console.log('Status da resposta:', response.status);
        console.log('Body da resposta:', response.body);

        // Verificando o status correto
        expect(response.status).toBe(404);

        // Verificando que o corpo da resposta contém o erro esperado
        expect(response.body).toEqual({ detail: 'Not found' });
    });

    // Testes avançados
    describe('Testes da API SWAPI - Exploração Avançada', () => {
        it('Deve retornar Tatooine como primeiro planeta em /planets/1', async () => {
            const response = await request(BASE_URL).get('/planets/1');
            expect(response.status).toBe(200);
            expect(response.body.name).toBe('Tatooine');
        });

        it('Deve retornar uma população definida para o planeta Endor em /planets/7', async () => {
            const response = await request(BASE_URL).get('/planets/7');
            expect(response.body.population).toBeDefined();
            expect(typeof response.body.population).toBe('string');
        });

        it('Deve retornar Millennium Falcon para /starships/10', async () => {
            const response = await request(BASE_URL).get('/starships/10');
            expect(response.status).toBe(200);
            expect(response.body.name).toBe('Millennium Falcon');
        });

        it('Deve retornar 6 filmes em /films', async () => {
            const response = await request(BASE_URL).get('/films');
            expect(response.status).toBe(200);
            expect(response.body.count).toBe(6);
        });

        it('Deve retornar "A New Hope" como o título do primeiro filme em /films/1', async () => {
            const response = await request(BASE_URL).get('/films/1');
            expect(response.body.title).toBe('A New Hope');
        });

        it('Deve retornar status 404 para a rota inexistente /heroes', async () => {
            const response = await request(BASE_URL).get('/heroes');
            expect(response.status).toBe(404);
            expect(response.body).toEqual({ detail: 'Not found' });
        });

        it('Deve retornar um modelo definido para Star Destroyer em /starships/3', async () => {
            const response = await request(BASE_URL).get('/starships/3');
            expect(response.body.model).toBeDefined();
            expect(typeof response.body.model).toBe('string');
        });

        it('Deve conter Luke Skywalker nos personagens do filme /films/1', async () => {
            const response = await request(BASE_URL).get('/films/1');
            expect(response.body.characters).toContain('https://swapi.dev/api/people/1/');
        });

        it('Deve retornar o planeta Naboo em /films/1', async () => {
            const response = await request(BASE_URL).get('/films/1');
            expect(response.body.planets).toContain('https://swapi.dev/api/planets/8/');
        });

        it('Deve retornar pelo menos 10 naves em /starships', async () => {
            const response = await request(BASE_URL).get('/starships');
            expect(response.body.count).toBeGreaterThanOrEqual(10);
        });
    });
});
