import type { FC, ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import type { LucideIcon } from 'lucide-react';

interface ContentItem {
  heading: string;
  text: string | string[];
  details?: string[];
}

interface TreeTypeSectionProps {
  title: string;
  icon?: LucideIcon;
  description?: string;
  contentItems: ContentItem[];
  interactiveElement?: ReactNode;
}

const TreeTypeSection: FC<TreeTypeSectionProps> = ({ title, icon: Icon, description, contentItems, interactiveElement }) => {
  return (
    <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          {Icon && <Icon className="w-8 h-8 text-primary" />}
          <CardTitle className="text-3xl font-semibold text-primary">{title}</CardTitle>
        </div>
        {description && <CardDescription className="text-lg">{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        {contentItems.map((item, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold text-foreground/90 mb-2">{item.heading}</h3>
            {typeof item.text === 'string' ? (
              <p className="text-foreground/80 leading-relaxed">{item.text}</p>
            ) : (
              <ul className="list-disc list-inside space-y-1 text-foreground/80 leading-relaxed">
                {item.text.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            )}
            {item.details && (
                 <ul className="list-disc list-inside space-y-1 text-foreground/70 leading-relaxed mt-2 ml-4 text-sm">
                 {item.details.map((detail, i) => <li key={i}>{detail}</li>)}
               </ul>
            )}
            {index < contentItems.length -1 && !interactiveElement && <Separator className="my-6" />}
          </div>
        ))}
        {interactiveElement && (
          <>
            <Separator className="my-6" />
            <div>
              <h3 className="text-xl font-semibold text-foreground/90 mb-3">Ejemplo Interactivo</h3>
              {interactiveElement}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default TreeTypeSection;
