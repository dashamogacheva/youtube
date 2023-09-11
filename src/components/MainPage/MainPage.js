import FilterWrapper from "../FilterWrapper/FilterWrapper";
import SectionVideoPreview from "../SectionVideoPreview/SectionVideoPreview";
import SidePanel from "../SidePanel/SidePanel";

export default function MainPage() {
    return (
        <>
            <SidePanel/>
            <FilterWrapper/>
            <SectionVideoPreview/>
        </>
    );
}