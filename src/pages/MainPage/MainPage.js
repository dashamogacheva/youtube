import FilterWrapper from "../../components/FilterWrapper/FilterWrapper";
import SectionVideoPreview from "../../components/SectionVideoPreview/SectionVideoPreview";
import SidePanel from "../../components/SidePanel/SidePanel";

export default function MainPage() {
    return (
        <>
            <SidePanel/>
            <FilterWrapper/>
            <SectionVideoPreview/>
        </>
    );
}