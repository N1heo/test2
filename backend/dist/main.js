"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function start() {
    const PORT = process.env.PORT || 3001;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.enableCors({
        origin: "http://localhost:3000",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle("ProCritique")
        .setDescription("Документация REST API")
        .setVersion("1.0.0")
        .addTag("Sandzyaru")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("/api/docs", app, document);
    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}
start();
//# sourceMappingURL=main.js.map