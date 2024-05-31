
import { useAuthStore } from "@/store/auth/auth.store";
import { Layout } from "../shared/layout/Layout"

export const HomePage = () => {

  const token = useAuthStore((state) => state.token);
  const usuario = useAuthStore((state) => state.usuario);

  return (
    <Layout>
      <div className="text-7xl font-semibold flex items-center mt-52 justify-center h-max">
        <h1> Home Page </h1>
      </div>
    </Layout>
  )
}
