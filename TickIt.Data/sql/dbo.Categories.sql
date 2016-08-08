CREATE TABLE [dbo].[Categories] (
    [Id]     INT          IDENTITY (1, 1) NOT NULL,
    [UserId] INT          NOT NULL,
    [Name]   VARCHAR (50) NOT NULL,
    [Color]  VARCHAR (6)  NOT NULL,
    [Order]  INT          DEFAULT ((0)) NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Categories_Users] FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users] ([Id]) ON DELETE CASCADE
);


GO
CREATE NONCLUSTERED INDEX [IX_Categories_UserId]
    ON [dbo].[Categories]([UserId] ASC);

