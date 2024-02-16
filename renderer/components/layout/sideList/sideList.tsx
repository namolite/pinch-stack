import CardDivider from "@Components/layout/sideList/cardDivider"

export default function SideList() {
  return (
    <aside>
      <CardDivider>
        <div className="flex items-center mb-4">
          <div className="rounded-full h-8 w-8 bg-blue-500 flex items-center justify-center text-white">D</div>
          <span className="ml-2 text-gray-700">Demo Workspace</span>
        </div>
        <div className="space-y-2">
          <button className="text-gray-700 font-semibold">All pages</button>
          <button className="text-gray-700 font-semibold">Settings</button>
          <div className="pt-4">
            <p className="text-gray-500 text-sm">Favourites</p>
            <button className="text-gray-700 font-semibold">Getting Started</button>
          </div>
          <div className="pt-4">
            <p className="text-gray-500 text-sm">Collections</p>
            <button className="text-gray-700 font-semibold">test_4</button>
            <button className="text-gray-700 font-semibold">test_3</button>
            <button className="text-gray-700 font-semibold">test_2</button>
            <button className="text-gray-700 font-semibold">test_1</button>
          </div>
          <button className="text-blue-500 font-semibold">Discover what's new!</button>
          <button className="text-gray-700 font-semibold">+ New Page</button>
        </div>
      </CardDivider>
    </aside>
  )
}