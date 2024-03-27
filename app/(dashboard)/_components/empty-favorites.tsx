import Image from "next/image";

export const EmptyFavorites = () => {
    return (
        <div className="h-full flex flex-col justify-center items-center">
            <Image
                src="/empty-favorites.svg"
                width={140}
                height={140}
                alt="Empty"
            />
            <h2 className="text-2xl font-semibold mt-6">No favorited boards</h2>
            <p className="to-muted-foreground text-sm mt-2">Try favoriting a board</p>
        </div>
    );
}