import { StorageService } from "@/Domain/service/_storage.service"
import { useEffect } from "react"
import { container } from "tsyringe"

const useAuth = () => {
    const storageService = container.resolve(StorageService)

    useEffect(() => {
        storageService.clear()
    }, [])
}

export default useAuth