import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { TestRoute } from './routes/test.route';
import { PriceRoutes } from './routes/price.route';
import { ValidateEnv } from '@utils/validateEnv';

ValidateEnv();

const app = new App([new UserRoute(), new AuthRoute(), new TestRoute(), new PriceRoutes()]);

app.listen();
