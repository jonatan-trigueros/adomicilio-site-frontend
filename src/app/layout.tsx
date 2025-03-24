import "../styles/globals.css"; // Importa Tailwind
import "../styles/muiConfig"; // Desactiva estilos de MUI

 
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <html>
        <body>
          {children}
        </body>
      </html>
    )
  }
