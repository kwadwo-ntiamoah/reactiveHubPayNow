import { container } from "tsyringe";
import { AxiosClient } from "../network";
import { AuthRepo, TransactionRepo } from "@/Data/repository";
import { StorageService } from "@/Domain/service/_storage.service";

class ServiceLocator {
    static init() {
        // 3rd party
        container.register("StorageService", { useValue: StorageService })
        container.register("IHttpClient", { useClass: AxiosClient })

        // repositories
        container
            .register("IAuthRepo", { useClass: AuthRepo })
            .register("ITransactionRepo", { useClass: TransactionRepo })
            // .register("")

        // services
    }
}

export default ServiceLocator