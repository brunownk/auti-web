import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import toast from "react-hot-toast";

import { authService } from "../../../app/services/authService";
import { SigninParams } from "../../../app/services/authService/signin";
import { useAuth } from "../../../app/hooks/useAuth";

const schema = z.object({
  email: z.string().min(1, 'E-mail é obrigatório').email('Informe um e-mail válido'),
  password: z.string().min(8, 'Senha deve conter pelo menos 8 dígitos'),
})

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
  } = useForm<FormData>({ 
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: SigninParams) => {
      return authService.signin(data)
    },
  });

  const { signin } = useAuth();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      
      signin(accessToken);
    } catch {
      toast.error('Credenciais inválidas!')
    }
  })

  return { handleSubmit, register, errors, isPending };
}