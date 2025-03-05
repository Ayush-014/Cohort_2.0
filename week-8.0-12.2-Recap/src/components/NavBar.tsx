import { SearchBar } from "./SearchBar"

export function NavBar() {
    return <div className="border-yellow-500 border-2 flex justify-between pt-1 p-3">
        <div>
            YouTube
        </div>
        <div>
            <SearchBar />
        </div>
        <div>
            SignIn
        </div>
    </div>
}