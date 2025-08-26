import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex items-center">
        <img
          src="/logo_transparent2.png"
          alt="Vite logo"
          className="h-8 mr-2 dark:hidden"
        />
        <img
          src="/logo_transparent.png"
          alt="Vite logo"
          className="h-8 mr-2 hidden dark:block"
        />
        <div className="text-lg font-bold text-gray-900 dark:text-gray-100">
          TC de Villeneuve sur Auvers
        </div>
      </div>
      <div className="flex items-center">
        <DarkModeToggle />
      </div>
    </nav>
  );
}
