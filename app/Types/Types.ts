interface TechStackItem {
    name: string,
    logo: string,
}

interface ProjectCardInfoType {
    title: string,
    desc: string,
    type: string
}

export interface Project {
    id: number,
    type: 'web' | 'video' | 'photo',
    title: string,
    client: string,
    link: string,
    clientLogo: string,
    techStack?: TechStackItem[],
    gearUsed?: string[]
    desc: string,
    desc2?: string,
    responsibilities: string[],
    resultDesc?: string,
    thumbnail: string,
    gallery?: string[],
    videoGallery?: string[]
    projectCardInfo: ProjectCardInfoType
}