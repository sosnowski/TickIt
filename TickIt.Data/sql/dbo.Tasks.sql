CREATE TABLE [dbo].[Tasks] (
    [Id]          INT          IDENTITY (1, 1) NOT NULL,
    [CategoryId]  INT          NOT NULL,
    [Title]       VARCHAR (50) NOT NULL,
    [Content]     TEXT         NOT NULL,
    [Important]   BIT          DEFAULT ((0)) NOT NULL,
    [Status]      INT          NOT NULL,
    [Order]       INT          DEFAULT ((0)) NOT NULL,
    [DateTo]      DATE         NULL,
    [DateUpdated] DATETIME     DEFAULT (getdate()) NOT NULL,
    [DateCreated] DATETIME     DEFAULT (getdate()) NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Tasks_Category] FOREIGN KEY ([CategoryId]) REFERENCES [dbo].[Categories] ([Id]) ON DELETE CASCADE
);


GO
CREATE NONCLUSTERED INDEX [IX_Tasks_CategoryId]
    ON [dbo].[Tasks]([CategoryId] ASC);

