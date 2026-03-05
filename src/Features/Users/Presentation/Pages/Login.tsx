import Input from "../../../../Components/Input";
import { useAuth } from "../ViewModels/UseAuth";

function Login() {
    const { 
            handleSubmit, 
            error, 
            loading, 
            username, 
            setUsername, 
            password, 
            setPassword 
        } = useAuth();
  return (
    <div>Login
        <form 
                onSubmit={handleSubmit}
                className='rounded px-6 w-full max-w-sm'
                >
                    <div>
                        <Input value={username} setValue={setUsername} label="Username" />
                    </div>
                    <div>
                        <Input value={password} setValue={setPassword} label="Password" type="password" />
                    </div>
                    {error && (
                        <div>{error}</div>
                    )}
                    <button 
                        type="submit" 
                        disabled={loading}
                    >
                        {loading ? 'Cargando...' : 'Iniciar Sesión'}
                    </button>
        </form>
    </div>
  )
}

export default Login