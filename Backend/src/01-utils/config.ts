abstract class Config {
    public loginExpiresIn: string;
}
class DevelopmentConfig extends Config {
    public isDevelopment = true;
    public connectionString = "mongodb://localhost:27017/PriceListTask";
    public constructor() {
        super();
        this.loginExpiresIn = "24h";
    }
}

class ProductionConfig extends Config {
    public isDevelopment = false;
    public connectionString = "mongodb://localhost:27017/PriceListTask";
    public constructor() {
        super();
        this.loginExpiresIn = "24h";
    }
}

const config = process.env.NODE_ENV === "production" ? new ProductionConfig() : new DevelopmentConfig();

export default config;
